import time

def trigger_training_job(run_id: int, dataset_uri: str, hyperparams: dict):
    # Mocking a long-running training process
    # In production, this would dispatch to RabbitMQ or Celery
    print(f"Starting training for run {run_id} on {dataset_uri}")
    time.sleep(2) # simulate work
    metrics = {"accuracy": 0.92, "loss": 0.15}
    return metrics
