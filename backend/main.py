from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from app.config import settings, logger
from app.db.redis import redis_manager
from app.middlewares.permormance import PerformanceMiddleware
from app.routers import api_router
from app.schedule import streamer_scheduler


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Manage application lifespan events."""
    # Startup
    try:
        # Connect to Redis
        await redis_manager.connect()
        logger.info("Redis connection established")

        # Start the streamer update scheduler
        streamer_scheduler.start()
        logger.info("Streamer scheduler started")

    except Exception as e:
        logger.error(f"Error during startup: {str(e)}")

    yield

    # Shutdown
    try:
        # Stop the scheduler first
        streamer_scheduler.stop()
        logger.info("Streamer scheduler stopped")

        # Disconnect from Redis
        await redis_manager.disconnect()
        logger.info("Redis connection closed")

    except Exception as e:
        logger.error(f"Error during shutdown: {str(e)}")

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.PROJECT_DESCRIPTION,
    version=settings.VERSION,
    docs_url="/docs" if settings.DEBUG else None,
    redoc_url="/redoc" if settings.DEBUG else None,
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.APP_FRONTEND_URL] if not settings.DEBUG else ["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=[
        "Authorization",
        "Content-Type",
        "Accept",
        "Origin",
        "X-Requested-With",
    ],
)

app.add_middleware(PerformanceMiddleware)

app.include_router(api_router, prefix="/api")

if __name__ == "__main__":
    uvicorn.run(
        app="main:app",
        port=8000,
        reload=settings.DEBUG,
        workers=1,
        limit_concurrency=100,
        limit_max_requests=1000,
        timeout_keep_alive=5,
        access_log=settings.DEBUG,
    )
