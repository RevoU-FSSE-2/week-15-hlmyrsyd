import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

async function createTransaction(req: Request, res: Response) {
    const { name, transaction } = req.body;

    const createdTransaction = await req.collection.insertOne({
        name,
        transaction,
    });

    res.status(200).json({
        message: 'successfully add Transaction',
        data: createdTransaction,
    });
}

async function getAllTransaction(req: Request, res: Response) {
    const transactions = await req
        .collection
        .find({ is_deleted: { $exists: false } })
        .toArray();

    res.status(200).json({
        message: 'success',
        data: transactions,
    });
}

async function updateTransaction(req: Request, res: Response) {
    const id = req.params.id;
    const { name, transaction } = req.body;

    const user = await req.collection.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                name,
                transaction,
            },
        }
    );

    res.status(200).json({
        message: 'updated',
        data: transaction,
    });
}

async function deleteTransaction(req: Request, res: Response) {
    const { id } = req.params;
    const book = await req.collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        {
            $set: {
                is_deleted: true,
            },
        }
    );

    res.status(200).json({
        message: 'successfully deleted',
    });
}

export {
    createTransaction,
    getAllTransaction,
    updateTransaction,
    deleteTransaction,
};
