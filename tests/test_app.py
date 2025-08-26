import pytest
from src.app import app
from unittest.mock import patch, MagicMock

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        with patch('src.app.llm') as mock_llm:
            # Configure the mock LLM's response
            mock_response = MagicMock()
            mock_response.content = "This is a mock response."
            mock_llm.invoke.return_value = mock_response
            yield client

def test_home(client):
    """Test the home page."""
    rv = client.get('/')
    assert rv.status_code == 200
    assert b'Agentic Spam Chatbot' in rv.data

def test_chat_ham(client):
    """Test the /chat endpoint with a ham message."""
    # Send a request to the chat endpoint
    rv = client.post('/chat', json={'message': 'Hello, how are you?'})

    # Check the response
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert 'response' in json_data
    assert json_data['response'] == "This is a mock response."

def test_chat_spam(client):
    """Test the /chat endpoint with a spam message."""
    # This message is likely to be classified as spam
    spam_message = 'URGENT! You have won a 1 week FREE membership in our prize jackpot! Txt the word: CLAIM to No: 81010 T&C www.dbuk.net LCCLTD POBOX 4403LDNW1A7RW18'

    # Send a request to the chat endpoint
    rv = client.post('/chat', json={'message': spam_message})

    # Check the response
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert 'response' in json_data
    assert json_data['response'] == "This is a mock response."

def test_chat_no_message(client):
    """Test the /chat endpoint with no message."""
    rv = client.post('/chat', json={})
    assert rv.status_code == 400
    json_data = rv.get_json()
    assert 'error' in json_data
    assert json_data['error'] == 'Message is required'
