import helmet from 'helmet';
import { Express } from 'express';

const helmetMiddleware = (app: Express): void => {
    app.use(helmet());
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'"],
                    objectSrc: ["'none'"],
                    frameAncestors: ["'none'"],
                },
            },
        })
    );
};

export default helmetMiddleware;
