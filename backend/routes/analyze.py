from fastapi import APIRouter, UploadFile, File
import pandas as pd
import io
import matplotlib.pyplot as plt
import base64
from io import BytesIO
from database import uploads_collection
from datetime import datetime


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
        unique_ratio = numeric_df[col].nunique() / len(numeric_df[col])
        if unique_ratio > 0.5:
            numeric_df[col].plot(kind='hist', bins=10)
            plt.title(f'Distribution of {col}')
        else: 
            numeric_df[col].value_counts().head(10).plot(kind='bar')    
            plt.title(f"Top 10 values for {col}")

        plt.tight_layout()

        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        charts[col] = base64.b64encode(buffer.read()).decode('utf-8')
        plt.close()

    #MongoDB saving
    try: 
        uploads_collection.insert_one({
            "filename": file.filename,
            "rows": rows,
            "columns": columns,
            "column_names": column_names,
            "uploaded_at": datetime.utcnow()
        })
    except Exception as e: 
        print(f"MongoDB error: {e}")

    return {
        "rows": rows,
        "columns": columns,
        "column_names": column_names,
        "stats": stats,
        "charts": charts
    }

@router.get("/history")
async def get_history():
    uploads = list(uploads_collection.find({}, {"_id":0}).sort("uploaded_at", -1).limit(10))
    return {"history": uploads}