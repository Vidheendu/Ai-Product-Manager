from sentence_transformers import SentenceTransformer

# Load model only once when the server starts
model = SentenceTransformer("all-MiniLM-L6-v2")


def generate_embeddings(text_list):
    """
    Generate semantic embeddings for customer feedback.
    """

    embeddings = model.encode(
        text_list,
        show_progress_bar=False
    )

    return embeddings


def get_model():
    """
    Return the loaded Sentence Transformer model.
    """

    return model