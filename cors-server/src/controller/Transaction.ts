const { ObjectId } = require('mongodb');

async function createTransaction(req, res) {
    const { name, transaction } = req.body;

    const transaction = await req.collection.insertOne({
        name,
        transaction,
    });

    res.status(200).json({
        message: 'successfully add Transaction',
        data: transaction
    });
}

async function getAllTransaction(req, res) {
    const transactions = await req
    .collection
    .find({ is_deleted: {$exists: false}})
    .toArray();

    res.status(200).json({
        message: 'success',
        data: transactions
    })
}

async function updateTransaction(req, res) {
    const id = req.params.id;
    const {name, transaction} = req.body;

    const user = await req.collection.updateOne(
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
        data: tra
    })
}

async function deleteTransaction(req, res) {
    const { id } = req.params;
    const book = await req.collection.findOneAndUpdate(
        { _id: new ObjectId(id)},
        {
            $set: {
                is_deleted: true,
            }
        }
    );

    res.status(200).json({
        message: "successfully deleted"
    })
}

module.exports = {
    createTransaction,
    getAllTransaction,
    updateTransaction,
    deleteTransaction
}