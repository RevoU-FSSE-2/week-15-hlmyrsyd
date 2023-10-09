import express, { Application } from 'express';
import useMiddleware from './middleware';
import router from './routes';

const app: Application = express();
const port = process.env.PORT || 3000;

useMiddleware(app);

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});