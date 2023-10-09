import { Express, json, urlencoded } from 'express';

const bodyParserMiddleware = (app: Express): void => {
    app.use(json());
    app.use(urlencoded({ extended: true }));
};

export default bodyParserMiddleware;
