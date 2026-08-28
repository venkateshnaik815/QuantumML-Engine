from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from app.core.database import Base
import datetime

class Experiment(Base):
    __tablename__ = "experiments"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, index=True)
    name = Column(String, index=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Run(Base):
    __tablename__ = "runs"
    id = Column(Integer, primary_key=True, index=True)
    experiment_id = Column(Integer, ForeignKey("experiments.id"))
    status = Column(String) # PENDING, RUNNING, SUCCESS, FAILED
    metrics = Column(String) # JSON string representation
    artifacts_uri = Column(String)
