from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.analyze import router as analyze_router
from routes.dashboard import router as dashboard_router
from routes.clusters import router as cluster_router

app = FastAPI(
    title="AI Product Manager Copilot",
    version="1.0"
)

# -------------------------
# CORS Configuration
# -------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# Routes
# -------------------------
app.include_router(analyze_router)
app.include_router(dashboard_router)
app.include_router(cluster_router)


@app.get("/")
def root():
    return {
        "message": "AI Product Manager Copilot Backend Running"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }