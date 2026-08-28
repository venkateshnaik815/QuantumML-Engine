from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.dataset import Dataset
from app.schemas.dataset import DatasetCreate, Dataset as DatasetSchema
import shutil
import os

router = APIRouter(prefix="/datasets", tags=["datasets"])

@router.post("/", response_model=DatasetSchema)
def create_dataset(dataset: DatasetCreate, db: Session = Depends(get_db)):
    db_dataset = Dataset(**dataset.model_dump(), storage_uri="pending")
    db.add(db_dataset)
    db.commit()
    db.refresh(db_dataset)
    return db_dataset

@router.post("/{dataset_id}/upload")
def upload_dataset_file(dataset_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    dataset = db.query(Dataset).filter(Dataset.id == dataset_id).first()
    if not dataset:
        raise HTTPException(status_code=404, detail="Dataset not found")
    
    file_location = f"storage/{dataset_id}_{file.filename}"
    os.makedirs("storage", exist_ok=True)
    with open(file_location, "wb+") as file_object:
        shutil.copyfileobj(file.file, file_object)
        
    dataset.storage_uri = file_location
    db.commit()
    return {"info": f"file '{file.filename}' saved at '{file_location}'"}
