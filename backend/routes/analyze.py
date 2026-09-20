from fastapi import APIRouter, UploadFile, File
import pandas as pd
import io
import matplotlib.pyplot as plt
import base64
from io import BytesIO


router = APIRouter()

@router.post("/analyze")
async def analyze_csv(file: UploadFile = File(...)):
    contents = await file.read()
    df = pd.read_csv(io.BytesIO(contents))

    rows, columns = df.shape
    column_names = df.columns.tolist()
    stats = df.describe().fillna(0).to_dict()

    numeric_df = df.select_dtypes(include='number')
    charts ={}
    for col in numeric_df.columns:
        if numeric_df[col].dropna().empty:
            continue
        
        plt.figure(figsize=(8,4))
        numeric_df[col].value_counts().head(10).plot(kind="bar")
        plt.title(f"Top 10 values for {col}")
        plt.tight_layout()

        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        charts[col] = base64.b64encode(buffer.read()).decode('utf-8')
        plt.close()

    return {
        "rows": rows,
        "columns": columns,
        "column_names": column_names,
        "stats": stats,
        "charts": charts
    }