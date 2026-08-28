from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.dataset import Dataset
from app.services.preprocessing import clean_data, scale_features

router = APIRouter(prefix="/preprocessing", tags=["preprocessing"])

@router.post("/{dataset_id}/clean")
def trigger_cleaning(dataset_id: int, strategy: str = "drop", db: Session = Depends(get_db)):
    dataset = db.query(Dataset).filter(Dataset.id == dataset_id).first()
    if not dataset or not dataset.storage_uri:
        raise HTTPException(status_code=404, detail="Dataset file not found")
    
    try:
        df = clean_data(dataset.storage_uri, strategy)
        clean_path = dataset.storage_uri.replace(".csv", "_cleaned.csv")
        df.to_csv(clean_path, index=False)
        return {"status": "success", "cleaned_file": clean_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
