import express, { Application } from 'express';
import useMiddleware from './middleware';

const app: Application = express();
const port = process.env.PORT || 3000;

useMiddleware(app);
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});