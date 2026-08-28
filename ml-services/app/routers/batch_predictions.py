from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/batch-predict", tags=["predictions"])

class BatchRequest(BaseModel):
    model_uri: str
    dataset_uri: str

@router.post("/")
def trigger_batch_prediction(req: BatchRequest):
    # Simulate batch background job
    return {"status": "batch job initiated", "job_id": "BATCH_1234"}
