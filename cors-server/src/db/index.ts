import { MongoClient, Db, Collection } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

interface DatabaseConnection {
    db: Db;
    collection: Collection;
}

const dbConnection = async (): Promise<DatabaseConnection> => {
    try {
        const client = await new MongoClient(process.env.DB_PROD).connect();
        const db = client.db('week-15');
        const collection = db.collection('Books');
        return { db, collection };
    } catch (error) {
        console.log(error, "<=================== error ==================");
        throw new Error("Database connection error");
    }
};

export default dbConnection;
