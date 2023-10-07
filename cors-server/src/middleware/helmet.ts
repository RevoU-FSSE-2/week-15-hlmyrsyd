import { Application } from 'express';
import helmet from 'helmet';

const helmetMiddleware = (app: Application) => {
    app.use(helmet());
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'"],
                    styleSrc: ["'self'"],
                    fontSrc: ["'self'"],
                    imgSrc: ["'self'"],
                },
            },
            frameguard: {
                action: 'deny',
            },
            crossOriginEmbedderPolicy: true,
        })
    );
};

export default helmetMiddleware;