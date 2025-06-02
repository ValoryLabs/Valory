<div align="center">

# Backend

</div>

---

## 📦 Requirements

To run the backend, you need to have these dependencies installed:

- **Python 3.12+**: Core programming language for the backend
- **Package Manager**: [**uv**](https://github.com/astral-sh/uv) - Ultra-fast Python package manager written in Rust

---

## 📦 Key Dependencies

Key libraries used to power the backend functionality:

| Dependency                 | Version     | Purpose                                                                 |
|----------------------------|-------------|-------------------------------------------------------------------------|
| **aiosqlite**              | `>=0.20.0`  | Async driver for SQLite, used in debug mode                            |
| **alembic**                | `>=1.14.1`  | Database migrations and version control                                |
| **asyncpg**                | `>=0.30.0`  | High-performance async PostgreSQL driver                               |
| **fastapi[standard]**      | `>=0.115.8` | Web framework for building REST APIs                                   |
| **greenlet**               | `>=3.1.1`   | Concurrency support for SQLAlchemy                                    |
| **psycopg2-binary**        | `>=2.9.10`  | PostgreSQL database adapter for production                            |
| **python-dotenv**          | `>=1.0.1`   | Environment variable management                                       |
| **sqlalchemy**             | `>=2.0.37`  | ORM and SQL toolkit for database interactions                         |
| **sqlmodel**               | `>=0.0.22`  | SQLAlchemy extension for database models                              |
| **uuid**                   | `>=1.30`    | Universally unique identifier generation                              |
| **uvicorn**                | `>=0.34.0`  | ASGI server for FastAPI applications                                  |

All dependencies are installed automatically via `uv install` command using the `uv.lock` file

---

## 🛠 Setup Guide

### 1. **Environment Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/haxgun/Valory.git
   cd backend
   ```
2. Create virtual environment (optional but recommended):
   ```bash
   uv venv
   ```
3. Install dependencies:
    ```bash
    uv pip install -e .
    ```

4. Create .env configuration file:
    ```env
   PROJECT_NAME=""
   PROJECT_DESCRIPTION=""
   VERSION=""
   DEBUG=True
   
   TWITCH_CLIENT_ID=""
   TWITCH_CLIENT_SECRET=""
   
   DATABASE_LOGIN=""
   DATABASE_PASSWORD=""
   DATABASE_IP=""
   DATABASE_PORT=5432
   DATABASE_NAME=""
   
   SECRET_KEY=""
   ALGORITHM=""
   APP_FRONTEND_URL=""
   APP_BACKEND_URL=""
    ```

5. Initialize database:
```bash
alembic revision --autogenerate -m "Initial revision"
alembic upgrade head```

5. Launch the application:
    ```bash
   uv run main.py
   ```

---

## 🛡 API Documentation

Access the auto-generated API documentation at:
- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)

Use these interfaces to explore and test the API endpoints.
