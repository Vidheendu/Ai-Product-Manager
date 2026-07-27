from fastapi import APIRouter
from services.storage import load_analysis

router = APIRouter()


@router.get("/dashboard")
def dashboard():

    df, cluster_labels, trends, recommendations = load_analysis()

    if df is None:
        return {"message": "No dataset analyzed yet."}

    # Count priorities
    priority_counts = (
        df["priority"]
        .value_counts()
        .to_dict()
    )

    return {
        "summary": {
            "total_feedback": int(len(df)),
            "total_clusters": int(df["cluster"].nunique()),
            "total_themes": int(df["theme"].nunique()),

            # NEW
            "high_priority": int(priority_counts.get("High", 0)),
            "medium_priority": int(priority_counts.get("Medium", 0)),
            "low_priority": int(priority_counts.get("Low", 0))
        },

        "priority_distribution": {
            "High": int(priority_counts.get("High", 0)),
            "Medium": int(priority_counts.get("Medium", 0)),
            "Low": int(priority_counts.get("Low", 0))
        },

        "cluster_labels": cluster_labels,

        "trends": trends,

        "recommendations": recommendations
    }