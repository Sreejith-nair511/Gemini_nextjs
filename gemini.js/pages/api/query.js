import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;
        try {
            // Replace with your local Python server URL
            const response = await axios.post('http://localhost:11434/api/chat', { message });
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Only POST requests allowed' });
    }
}
