import { Request, Response, NextFunction } from 'express';
import dbConnection from '../db';

const databaseMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { db, collection } = await dbConnection();
    req.db = db;
    req.collection = collection;
    next();
};

export default databaseMiddleware;
