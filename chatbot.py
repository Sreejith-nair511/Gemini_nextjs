import streamlit as st
import requests

OLLAMA_API_URL = 'https://api.gemini.com/v1/chat'

def get_gemini_response(message):
    headers = {
        'Content-Type': 'application/json'
    }
    data = {
        'message': message
    }
    response = requests.post(OLLAMA_API_URL, json=data, headers=headers)
    
    if response.status_code == 200:
        return response.json().get('response', '')
    else:
        return f"Error: {response.status_code} - {response.text}"

st.set_page_config(page_title='Gemini Chatbot', layout='wide')
st.title('Welcome to the Gemini Chatbot')
st.write('Ask me anything!')

user_input = st.text_input('You:', '')

if user_input:
    response = get_gemini_response(user_input)
    st.text_area('Gemini:', response, height=200)

if st.button('Clear'):
    st.text_input('You:', '', key='clear')
