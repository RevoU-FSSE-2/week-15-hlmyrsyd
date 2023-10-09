import { Request, Response } from 'express' 
const { ObjectId } = require('mongodb');

async function createTransaction(req: Request, res: Response) {
    const { name, transaction: transactionData } = req.body; // Rename 'transaction' to 'transactionData'

    const transaction = await req.collection.insertOne({
        name,
        transaction: transactionData,
    });

    res.status(200).json({
        message: 'successfully add Transaction',
        data: transaction
    });
}

async function getAllTransaction(req: Request, res: Response) {
    const transactions = await req
        .collection
        .find({ is_deleted: { $exists: false } })
        .toArray();

    res.status(200).json({
        message: 'success',
        data: transactions
    });
}

async function updateTransaction(req: Request, res: Response) {
    const id = req.params.id;
    const { name, transaction } = req.body;

    await req.collection.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                name,
                transaction
            }
        }
    );

    res.status(200).json({
        message: 'updated',
        data: transaction // Use 'transaction' instead of 'tra'
    });
}

async function deleteTransaction(req: Request, res: Response) {
    const { id } = req.params;
    await req.collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        {
            $set: {
                is_deleted: true,
            }
        }
    );

    res.status(200).json({
        message: "successfully deleted"
    });
}

module.exports = {
    createTransaction,
    getAllTransaction,
    updateTransaction,
    deleteTransaction
};
