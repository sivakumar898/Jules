import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.metrics import accuracy_score, classification_report

class SpamClassifier:
    def __init__(self):
        # Load the dataset
        df = pd.read_csv('data/SMSSpamCollection', sep='\t', names=['label', 'message'])

        # Split data into training and testing sets
        X_train, self.X_test, y_train, self.y_test = train_test_split(df['message'], df['label'], test_size=0.2, random_state=42)

        # Create and train the model
        self.model = make_pipeline(TfidfVectorizer(), MultinomialNB())
        self.model.fit(X_train, y_train)

    def predict(self, message):
        return self.model.predict([message])[0]

    def evaluate(self):
        # Make predictions on the test set
        predictions = self.model.predict(self.X_test)

        # Evaluate the model
        accuracy = accuracy_score(self.y_test, predictions)
        report = classification_report(self.y_test, predictions)

        return accuracy, report

if __name__ == "__main__":
    classifier = SpamClassifier()
    accuracy, report = classifier.evaluate()

    print(f"Accuracy: {accuracy}")
    print("Classification Report:")
    print(report)

    # Example prediction
    sample_message = "Congratulations! You've won a free ticket to the cinema."
    prediction = classifier.predict(sample_message)
    print(f"\nMessage: '{sample_message}'")
    print(f"Prediction: {prediction}")
