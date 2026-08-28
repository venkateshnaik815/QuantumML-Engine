from fastapi import FastAPI
from app.routers import datasets, preprocessing
from app.core.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(title='QuantumML Engine ML Services')

app.include_router(datasets.router)
app.include_router(preprocessing.router)

@app.get('/')
def read_root():
    return {'status': 'ML Services API Running'}
from app.routers import training, automl
app.include_router(training.router)
app.include_router(automl.router)
from app.routers import predictions, batch_predictions
app.include_router(predictions.router)
app.include_router(batch_predictions.router)
