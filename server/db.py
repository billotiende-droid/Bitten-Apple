import os
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://postgres:password@localhost:5423/gadgetstore_db")

class Base(DeclarativeBase):
    pass

engine = create_async_engine(
    DATABASE_URL,
    echo =False,       # Set to True only during local debugging to see raw SQL logs
    pool_pre_ping=True,     # Automatically checks and discards stale connections
    pool_size=20,          # Minimum persistent connections to keep open
    max_overflow=10,       # Maximum heavy connections to spin up under heavy traffic
)


# Async Session Factory
AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,     # Prevents SQLAlchemy from expiring attributes after commit(vital for async)
)

