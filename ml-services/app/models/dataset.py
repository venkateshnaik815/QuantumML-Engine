from sqlalchemy import Column, Integer, String, DateTime
from app.core.database import Base
import datetime

class Dataset(Base):
    __tablename__ = "datasets"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    storage_uri = Column(String)
    format = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
