from keybert import KeyBERT
from .embedding import get_model

# Reuse the already loaded Sentence Transformer
embedding_model = get_model()

kw_model = KeyBERT(model=embedding_model)


def extract_themes(df):
    """
    Automatically generate business themes
    for each cluster using KeyBERT.
    """

    cluster_labels = {}

    for cluster_id in sorted(df["cluster"].unique()):

        cluster_text = " ".join(
            df[df["cluster"] == cluster_id]["clean_text"].astype(str)
        )

        keywords = kw_model.extract_keywords(
            cluster_text,
            keyphrase_ngram_range=(1, 2),
            stop_words="english",
            top_n=3
        )

        if keywords:
            cluster_labels[int(cluster_id)] = keywords[0][0]
        else:
            cluster_labels[int(cluster_id)] = "General Feedback"

    df["theme"] = df["cluster"].map(cluster_labels)

    return df, cluster_labels