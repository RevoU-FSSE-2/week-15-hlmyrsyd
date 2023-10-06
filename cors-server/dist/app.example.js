"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Enable CORS for all origins (not recommended for production)
app.use((0, cors_1.default)({
    origin: 'http://127.0.0.1:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, HTTP authentication)
}));
// Define a sample API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, CORS is enabled!' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
