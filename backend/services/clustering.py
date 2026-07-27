from sklearn.cluster import KMeans
import joblib
import os

# Model storage path
MODEL_PATH = "models/kmeans_model.pkl"

# Number of clusters (same as notebook)
NUM_CLUSTERS = 25


def train_kmeans(embeddings):
    """
    Train the K-Means model and return cluster labels.
    """

    model = KMeans(
        n_clusters=NUM_CLUSTERS,
        random_state=42,
        n_init=10
    )

    labels = model.fit_predict(embeddings)

    return model, labels


def save_model(model):
    """
    Save trained K-Means model.
    """

    os.makedirs("models", exist_ok=True)

    joblib.dump(model, MODEL_PATH)


def load_model():
    """
    Load saved K-Means model.
    """

    if os.path.exists(MODEL_PATH):
        return joblib.load(MODEL_PATH)

    return None