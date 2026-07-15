from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


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
            await conn.execute("SELECT 1")
            print("Db connection established successfully")
    except Exception as e:
        print(f"Failed to connect to the database on startup: {e}")
        raise e  

    yield  # Application runs here

# Clean up connections and close the engine pool
    await engine.dispose()
    print("Db connection pool closed")      
