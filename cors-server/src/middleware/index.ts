import { Application } from 'express';
import corsMiddleware from './corsMiddleware';
import helmetMiddleware from './helmetMiddleware';
import morganMiddleware from './morganMiddleware';
import requestMiddleware from './requestMiddleware';

const useMiddleware = (app: Application) => {
    requestMiddleware(app);
    helmetMiddleware(app);
    corsMiddleware(app);
    morganMiddleware(app);
};

export default useMiddleware;