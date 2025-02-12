from sqlalchemy import select


class BaseDAO:
    model = None

    @classmethod
    async def find_by_id(cls, session, model_id: int):
        query = select(cls.model).filter_by(id=model_id)
        result = await session.execute(query)
        return result.scalars().one_or_none()

    @classmethod
    async def find_one_or_none(cls, session, **kwargs):
        query = select(cls.model).filter_by(**kwargs)
        result = await session.execute(query)
        return result.scalars().one_or_none()

    @classmethod
    async def find_all(cls, session):
        query = select(cls.model)
        result = await session.execute(query)
        return result.scalars().all()
