from sqlalchemy import Column, Integer, String, JSON
from app.core.database import Base

class ModelTemplate(Base):
    __tablename__ = "model_templates"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    framework = Column(String) # scikit-learn, pytorch, tensorflow
    default_hyperparams = Column(JSON)
