"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ObjectId } = require('mongodb');
function createTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, transaction: transactionData } = req.body; // Rename 'transaction' to 'transactionData'
        const transaction = yield req.collection.insertOne({
            name,
            transaction: transactionData,
        });
        res.status(200).json({
            message: 'successfully add Transaction',
            data: transaction
        });
    });
}
function getAllTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const transactions = yield req
            .collection
            .find({ is_deleted: { $exists: false } })
            .toArray();
        res.status(200).json({
            message: 'success',
            data: transactions
        });
    });
}
function updateTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const { name, transaction } = req.body;
        yield req.collection.updateOne({ _id: new ObjectId(id) }, {
            $set: {
                name,
                transaction
            }
        });
        res.status(200).json({
            message: 'updated',
            data: transaction // Use 'transaction' instead of 'tra'
        });
    });
}
function deleteTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield req.collection.findOneAndUpdate({ _id: new ObjectId(id) }, {
            $set: {
                is_deleted: true,
            }
        });
        res.status(200).json({
            message: "successfully deleted"
        });
    });
}
module.exports = {
    createTransaction,
    getAllTransaction,
    updateTransaction,
    deleteTransaction
};
