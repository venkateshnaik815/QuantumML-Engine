from fastapi import APIRouter, Depends, BackgroundTasks
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.experiment import Run
from app.services.training import trigger_training_job
import json

router = APIRouter(prefix="/training", tags=["training"])

def background_training_task(run_id: int, dataset_uri: str, hyperparams: dict, db: Session):
    metrics = trigger_training_job(run_id, dataset_uri, hyperparams)
    run = db.query(Run).filter(Run.id == run_id).first()
    if run:
        run.status = "SUCCESS"
        run.metrics = json.dumps(metrics)
        db.commit()

@router.post("/run/{experiment_id}")
def start_training(experiment_id: int, dataset_uri: str, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    new_run = Run(experiment_id=experiment_id, status="PENDING")
    db.add(new_run)
    db.commit()
    db.refresh(new_run)
    
    hyperparams = {"learning_rate": 0.01, "epochs": 10}
    background_tasks.add_task(background_training_task, new_run.id, dataset_uri, hyperparams, db)
    return {"message": "Training job started in background", "run_id": new_run.id}
