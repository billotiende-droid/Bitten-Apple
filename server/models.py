import uuid
from datetime import datetime
from typing import Optional, List
from sqlalchemy import String, Integer, Boolean, ForeignKey, DateTime, text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database import Base

class Admin(Base):
    __tablename__="admins"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(255))
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    password_hashed: Mapped[str] = mapped_column(String(255))
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=text("TIMEZONE('utc', now())"))
    updated_at: Mapped[datetime] = mapped_column(DateTime, server_default=text("TIMEZONE('utc', now())"), onupdate=text("TIMEZONE('utc', now())"))


class Customer(Base):
    __tablename__ = "customers"
    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(255))
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    password_hashed: Mapped[str] = mapped_column(String(255))
    phone: Mapped[Optional[str]] = mapped_column(String(20))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=text("TIMEZONE('utc', now())"))
    updated_at: Mapped[datetime] = mapped_column(DateTime, server_default=text("TIMEZONE('utc', now())"), onupdate=text("TIMEZONE('utc', now())"))



