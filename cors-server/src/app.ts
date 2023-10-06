import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for API1
app.use(
    '/api1',
    cors({
        origin: 'http://127.0.0.1:5500',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Enable credentials (cookies, HTTP authentication)
    })
);

// Enable CORS for API2
app.use(
    '/api2',
    cors({
        origin: 'http://192.168.0.134/:53500',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Enable credentials (cookies, HTTP authentication)
    })
);

// Define API endpoint

// API1 endpoints
app.get('/api1/data', (req, res) => {
    res.json({ message: 'Hello, CORS is enabled only at API1!' });
});

// API2 endpoints
app.get('/api2/data', (req, res) => {
    res.json({ message: 'Hello, CORS is enabled only at API2!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});