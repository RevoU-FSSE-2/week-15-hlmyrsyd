"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Enable CORS for API1
app.use('/api1', (0, cors_1.default)({
    origin: 'http://127.0.0.1:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, HTTP authentication)
}));
// Enable CORS for API2
app.use('/api2', (0, cors_1.default)({
    origin: 'http://192.168.0.134/:53500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, HTTP authentication)
}));
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
