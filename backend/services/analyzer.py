import pandas as pd

from .preprocessing import preprocess_dataframe
from .embedding import generate_embeddings
from .clustering import train_kmeans, save_model
from .themes import extract_themes
from .trend import generate_trend_analysis
from . import storage


def analyze_feedback(df: pd.DataFrame):

    # -------------------------
    # Preprocessing
    # -------------------------

    df = preprocess_dataframe(df)

    # -------------------------
    # Embeddings
    # -------------------------

    embeddings = generate_embeddings(
        df["clean_text"].tolist()
    )

    # -------------------------
    # Clustering
    # -------------------------

    model, labels = train_kmeans(embeddings)

    save_model(model)

    df["cluster"] = labels

    # -------------------------
    # Themes
    # -------------------------

    df, cluster_labels = extract_themes(df)

    # -------------------------
    # Trend Analysis
    # -------------------------

    trends = generate_trend_analysis(df)

    # -------------------------
    # Store globally
    # -------------------------

    storage.processed_df = df

    storage.cluster_labels = cluster_labels

    storage.trends = trends

    # -------------------------
    # Return only summary
    # -------------------------

    return {

        "message": "Dataset analyzed successfully",

        "total_feedback": int(len(df)),

        "total_clusters": int(df["cluster"].nunique()),

        "total_themes": int(df["theme"].nunique())

    }