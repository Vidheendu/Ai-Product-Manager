processed_df = None
cluster_labels = None
trends = None
recommendations = None


def save_analysis(df, labels, trend_data, recommendation_data):
    global processed_df
    global cluster_labels
    global trends
    global recommendations

    processed_df = df
    cluster_labels = labels
    trends = trend_data
    recommendations = recommendation_data


def load_analysis():
    return (
        processed_df,
        cluster_labels,
        trends,
        recommendations
    )