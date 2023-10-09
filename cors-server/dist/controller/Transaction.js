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
exports.deleteTransaction = exports.updateTransaction = exports.getAllTransaction = exports.createTransaction = void 0;
const mongodb_1 = require("mongodb");
function createTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, transaction } = req.body;
        const createdTransaction = yield req.collection.insertOne({
            name,
            transaction,
        });
        res.status(200).json({
            message: 'successfully add Transaction',
            data: createdTransaction,
        });
    });
}
exports.createTransaction = createTransaction;
function getAllTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const transactions = yield req
            .collection
            .find({ is_deleted: { $exists: false } })
            .toArray();
        res.status(200).json({
            message: 'success',
            data: transactions,
        });
    });
}
exports.getAllTransaction = getAllTransaction;
function updateTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const { name, transaction } = req.body;
        const user = yield req.collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, {
            $set: {
                name,
                transaction,
            },
        });
        res.status(200).json({
            message: 'updated',
            data: transaction,
        });
    });
}
exports.updateTransaction = updateTransaction;
function deleteTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const book = yield req.collection.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, {
            $set: {
                is_deleted: true,
            },
        });
        res.status(200).json({
            message: 'successfully deleted',
        });
    });
}
exports.deleteTransaction = deleteTransaction;
