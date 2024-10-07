// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { openai } = require('betabotz-tools');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint untuk menerima input pengguna
app.post('/ask', async (req, res) => {
    const userQuestion = req.body.question;

    try {
        const results = await openai(userQuestion);
        res.json(results); // Mengembalikan hasil OpenAI dalam format JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
