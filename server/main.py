from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from sqlalchemy import text


# Import async engine for connection verification on start up
from db import engine

# Import routers ( structured feature folders, e.g app/api/v1..)
# from server.api.v1.products import router as products_router


# Lifespan context manager to manage startup/shutdown events cleanly
@asynccontextmanager
async def lifespan(app: FastAPI):
    # verify db connectivity
    try:
        async with engine.begin() as conn:
            # query to make sure db is responding
            await conn.execute(text("SELECT 1"))
            print("Db connection established successfully")
    except Exception as e:
        print(f"Failed to connect to the database on startup: {e}")
        raise e  

    yield  # Application runs here

# Clean up connections and close the engine pool
    await engine.dispose()
    print("Db connection pool closed")  

# Initialize FastAPI
app = FastAPI(
    title="E-commerce API Backend",
    description="High-perfomance asynchronous FastAPI & PostgreSQL backend",
    version="1.0.0",
    lifespan=lifespan
)

origins = [
    "http://localhost:3000",      # Common React/Next.js local port
    "https://yourdomain.com",     # Production frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],          # Allow all HTTP methods
    allow_headers=["*"]            # Allow all request headers
)

# Include Modular Routers
# app.include_router(products_router, prefix="/api/v1")
# app.include_router(customers_router, prefix="/api/v1")

# Global Health Check Endpoint
@app.get("/health", tags=["Health"])
async def health_check():
    return {
        "status": "healthy",
        "environment": os.getenv("ENV", "development")
    }
