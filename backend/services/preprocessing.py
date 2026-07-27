import re
import string
import pandas as pd
import nltk

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Download resources only once
nltk.download("stopwords", quiet=True)
nltk.download("wordnet", quiet=True)
nltk.download("omw-1.4", quiet=True)

stop_words = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()


def clean_text(text: str) -> str:
    """
    Apply the same preprocessing steps used in the Colab notebook.
    """

    if pd.isna(text):
        return ""

    # Lowercase
    text = text.lower()

    # Remove punctuation
    text = text.translate(str.maketrans("", "", string.punctuation))

    # Remove numbers
    text = re.sub(r"\d+", "", text)

    # Remove extra spaces
    text = re.sub(r"\s+", " ", text).strip()

    # Remove stopwords
    text = " ".join(
        word for word in text.split()
        if word not in stop_words
    )

    # Lemmatization
    text = " ".join(
        lemmatizer.lemmatize(word)
        for word in text.split()
    )

    return text


def preprocess_dataframe(df: pd.DataFrame):

    df = df.copy()

    # Remove unnecessary columns if present
    columns_to_remove = [
        "customer_name",
        "customer_email",
        "payment_method",
        "resolution_notes",
        "Unnamed: 14"
    ]

    existing = [c for c in columns_to_remove if c in df.columns]

    if existing:
        df.drop(columns=existing, inplace=True)

    # Standardize column names
    df.columns = df.columns.str.strip()

    # Create clean_text column
    df["clean_text"] = df["issue_description"].apply(clean_text)

    return df