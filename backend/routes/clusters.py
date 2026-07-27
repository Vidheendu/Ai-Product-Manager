from fastapi import APIRouter
from services.storage import load_analysis

router = APIRouter()


@router.get("/cluster/{cluster_id}")
def cluster_details(cluster_id: int):

    df, cluster_labels, trends, recommendations = load_analysis()

    if df is None:
        return {"message": "No dataset analyzed yet."}

    cluster_df = df[df["cluster"] == cluster_id]

    if cluster_df.empty:
        return {"message": "Cluster not found"}

    priority_counts = (
        cluster_df["priority"]
        .value_counts()
        .to_dict()
    )

    issues = []

    for _, row in cluster_df.iterrows():

        issues.append({
            "ticket_id": int(row["ticket_id"]),
            "issue_description": row["issue_description"],
            "priority": row["priority"],
            "status": row["status"],
            "product": row["product"],
            "category": row["category"],
            "complexity": int(row["issue_complexity_score"]),
            "customer_score": int(row["customer_satisfaction_score"]),
            "escalated": row["escalated"]
        })

    return {
        "cluster_id": cluster_id,
        "theme": cluster_df["theme"].iloc[0],
        "issue_count": int(len(cluster_df)),
        "priority_breakdown": {
            "High": int(priority_counts.get("High", 0)),
            "Medium": int(priority_counts.get("Medium", 0)),
            "Low": int(priority_counts.get("Low", 0))
        },
        "issues": issues
    }

@router.get("/clusters")
def get_clusters():

    df, cluster_labels, trends, recommendations = load_analysis()

    if df is None:
        return {"message": "No dataset analyzed yet."}

    clusters = []

    for cluster_id, theme in cluster_labels.items():

        cluster_df = df[df["cluster"] == int(cluster_id)]

        clusters.append({
            "id": int(cluster_id),
            "theme": theme,
            "issue_count": int(len(cluster_df))
        })

    return clusters