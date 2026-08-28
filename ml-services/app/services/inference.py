def load_model(artifact_uri: str):
    # Simulated model loader
    print(f"Loading model from {artifact_uri}")
    return "MOCK_MODEL_OBJECT"

def predict(model, input_data: list):
    # Simulated inference
    return [0.89, 0.11] if input_data else []
