from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class DatasetBase(BaseModel):
    name: str
    description: Optional[str] = None
    format: str
    project_id: int

class DatasetCreate(DatasetBase):
    pass

class Dataset(DatasetBase):
    id: int
    storage_uri: str
    created_at: datetime
    
    class Config:
        from_attributes = True
