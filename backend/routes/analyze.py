from fastapi import APIRouter, UploadFile, File, HTTPException
import pandas as pd

from services.analyzer import analyze_feedback

router = APIRouter()


@router.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    """
    Upload a CSV or Excel file and perform AI analysis.
    """

    filename = file.filename.lower()

    try:
        # Read file based on extension
        if filename.endswith(".csv"):
            df = pd.read_csv(file.file)

        elif filename.endswith(".xlsx") or filename.endswith(".xls"):
            df = pd.read_excel(file.file)

        else:
            raise HTTPException(
                status_code=400,
                detail="Only CSV (.csv) and Excel (.xlsx/.xls) files are supported."
            )

        # Run AI pipeline
        result = analyze_feedback(df)

        return {
            "status": "success",
            "filename": file.filename,
            "rows_processed": len(df),
            "results": result
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )