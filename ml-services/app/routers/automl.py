from fastapi import APIRouter
from app.services.automl import run_automl

router = APIRouter(prefix="/automl", tags=["automl"])

@router.post("/optimize")
def optimize_model(dataset_uri: str, target: str, budget: int = 60):
    result = run_automl(dataset_uri, target, budget)
    return {"status": "success", "automl_result": result}
