from sqlalchemy import Column, Integer, String, Float
from app.core.database import Base

class Feature(Base):
    __tablename__ = "features"
    id = Column(Integer, primary_key=True, index=True)
    dataset_id = Column(Integer, index=True)
    name = Column(String, index=True)
    dtype = Column(String)
    importance_score = Column(Float, default=0.0)
