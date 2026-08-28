import pandas as pd
from sklearn.preprocessing import StandardScaler, MinMaxScaler

def clean_data(filepath: str, strategy: str = "drop"):
    df = pd.read_csv(filepath)
    if strategy == "drop":
        df = df.dropna()
    elif strategy == "mean":
        df = df.fillna(df.mean())
    return df

def scale_features(df: pd.DataFrame, method: str = "standard"):
    scaler = StandardScaler() if method == "standard" else MinMaxScaler()
    scaled_data = scaler.fit_transform(df.select_dtypes(include=['float64', 'int64']))
    df[df.select_dtypes(include=['float64', 'int64']).columns] = scaled_data
    return df
