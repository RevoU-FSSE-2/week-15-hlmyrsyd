import { Application } from 'express';
import bodyParserMiddleware from './bodyParser';
import corsMiddleware from './cors';
import helmetMiddleware from './helmet';
import morganMiddleware from './morgan';
import requestMiddleware from './request';

const useMiddleware = (app: Application) => {
    requestMiddleware(app);
    helmetMiddleware(app);
    corsMiddleware(app);
    morganMiddleware(app);
    bodyParserMiddleware(app);
};

export default useMiddleware;