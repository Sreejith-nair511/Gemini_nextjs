import { useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await res.json();
        setResponse(data.response || 'No response');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Ollama Chatbot</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything..."
                    style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
            </form>
            <div style={{ marginTop: '2rem' }}>
                <h2>Response</h2>
                <p>{response}</p>
            </div>
        </div>
    );
}
