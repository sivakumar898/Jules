import os
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from src.spam_classifier import SpamClassifier
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, template_folder='../templates')

# Initialize the spam classifier
classifier = SpamClassifier()

# Initialize LLM
llm = None
if not app.config.get("TESTING"):
    if os.getenv("OPENAI_API_KEY"):
        llm = ChatOpenAI(model_name="gpt-4", temperature=0.7)
    else:
        # This will be raised when running the app, but not during tests
        pass

# Define the agentic prompt
prompt_template = """
You are a helpful AI assistant with a special tool that can classify SMS messages as 'spam' or 'ham'.

When the user gives you a message, I will first classify it for you.
- If the message is 'spam', your job is to inform the user and suggest helpful actions, like deleting the message or blocking the sender. Be creative and helpful.
- If the message is 'ham', your job is to respond to the user's message in a friendly and conversational way.

Here is the message from the user, and its classification:

Message: "{user_message}"
Classification: "{classification}"

Your response:
"""

prompt = PromptTemplate(
    input_variables=["user_message", "classification"],
    template=prompt_template,
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    # Classify the message
    classification = classifier.predict(user_message)

    # Generate the prompt for the LLM
    formatted_prompt = prompt.format(user_message=user_message, classification=classification)

    # Get the response from the LLM. In a test environment, llm will be mocked.
    if not llm:
         raise ValueError("OPENAI_API_KEY not found in .env file")
    response = llm.invoke(formatted_prompt)
    bot_response = response.content

    return jsonify({"response": bot_response})

if __name__ == '__main__':
    if not os.getenv("OPENAI_API_KEY"):
        print("Warning: OPENAI_API_KEY not found in .env file. The chatbot will not work.")
    else:
        llm = ChatOpenAI(model_name="gpt-4", temperature=0.7)
    app.run(debug=True, port=5001)
