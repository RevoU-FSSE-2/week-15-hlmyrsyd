import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins (not recommended for production)
app.use(
    cors({
        origin: 'http://127.0.0.1:5500',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Enable credentials (cookies, HTTP authentication)
    })
);

// Define a sample API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, CORS is enabled!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});