from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class DeploymentEndpoint(Base):
    __tablename__ = "deployment_endpoints"
    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, ForeignKey("registered_models.id"))
    endpoint_url = Column(String)
    deployment_status = Column(String) # PROVISIONING, ACTIVE, FAILED
    deployment_type = Column(String) # REALTIME, BATCH
