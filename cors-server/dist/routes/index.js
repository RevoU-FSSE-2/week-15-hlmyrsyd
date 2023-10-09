"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_1 = __importDefault(require("./transaction"));
const dashboard_1 = __importDefault(require("./dashboard"));
const preventAttack_1 = __importDefault(require("./preventAttack"));
const router = (0, express_1.Router)();
router.use('/', dashboard_1.default);
router.use('/api/v1/attack', preventAttack_1.default);
router.use('/api/v1/transaction', transaction_1.default);
exports.default = router;
