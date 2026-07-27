import pandas as pd


def generate_trend_analysis(df: pd.DataFrame):
    """
    Generate dashboard statistics for the AI Product Manager Copilot.
    """

    # ----------------------------------------
    # Cluster Distribution
    # ----------------------------------------
    cluster_distribution = (
        df["cluster"]
        .value_counts()
        .sort_index()
        .to_dict()
    )

    # ----------------------------------------
    # Theme Distribution
    # ----------------------------------------
    theme_distribution = (
        df["theme"]
        .value_counts()
        .to_dict()
    )

    # ----------------------------------------
    # Product Distribution
    # ----------------------------------------
    product_distribution = (
        df["product"]
        .value_counts()
        .to_dict()
    )

    # ----------------------------------------
    # Priority Distribution
    # ----------------------------------------
    priority_distribution = (
        df["priority"]
        .value_counts()
        .to_dict()
    )

    # ----------------------------------------
    # Top 5 Themes
    # ----------------------------------------
    top_themes = (
        df["theme"]
        .value_counts()
        .head(5)
        .to_dict()
    )

    # ----------------------------------------
    # Top 5 Products
    # ----------------------------------------
    top_products = (
        df["product"]
        .value_counts()
        .head(5)
        .to_dict()
    )

    # ----------------------------------------
    # Top 5 Clusters
    # ----------------------------------------
    top_clusters = (
        df["cluster"]
        .value_counts()
        .head(5)
        .to_dict()
    )

    # ----------------------------------------
    # Summary
    # ----------------------------------------
    summary = {
        "total_feedback": int(len(df)),
        "total_clusters": int(df["cluster"].nunique()),
        "total_themes": int(df["theme"].nunique()),
        "total_products": int(df["product"].nunique())
    }

    return {

        "summary": summary,

        "cluster_distribution": cluster_distribution,

        "theme_distribution": theme_distribution,

        "product_distribution": product_distribution,

        "priority_distribution": priority_distribution,

        "top_themes": top_themes,

        "top_products": top_products,

        "top_clusters": top_clusters

    }