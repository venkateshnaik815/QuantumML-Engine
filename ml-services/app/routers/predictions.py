from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from app.services.inference import load_model, predict

router = APIRouter(prefix="/predict", tags=["predictions"])

class PredictionRequest(BaseModel):
    model_uri: str
    features: List[float]

@router.post("/")
def realtime_predict(req: PredictionRequest):
    model = load_model(req.model_uri)
    result = predict(model, req.features)
    return {"prediction": result}
