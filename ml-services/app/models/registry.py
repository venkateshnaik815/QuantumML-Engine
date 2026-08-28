from sqlalchemy import Column, Integer, String, DateTime
from app.core.database import Base
import datetime

class RegisteredModel(Base):
    __tablename__ = "registered_models"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, index=True)
    name = Column(String, index=True)
    version = Column(String)
    artifact_uri = Column(String)
    status = Column(String) # STAGED, PRODUCTION
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
