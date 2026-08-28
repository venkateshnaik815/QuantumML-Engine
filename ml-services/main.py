from fastapi import FastAPI

app = FastAPI(title='QuantumML Engine ML Services')

@app.get('/')
def read_root():
    return {'status': 'ML Services API Running'}