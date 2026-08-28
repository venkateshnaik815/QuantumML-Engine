def run_automl(dataset_uri: str, target_column: str, time_budget: int = 60):
    # Simulates AutoML pipeline (e.g. TPOT, Auto-sklearn)
    print(f"Running AutoML for {time_budget} seconds on {dataset_uri}")
    best_model = "RandomForestClassifier"
    best_params = {"n_estimators": 100, "max_depth": 10}
    return {"best_model": best_model, "hyperparameters": best_params}
