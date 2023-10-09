"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preventAttack_1 = require("../controller/preventAttack");
const router = (0, express_1.Router)();
router.get('/xss', preventAttack_1.getDataXss);
router.get('/click-jacking', preventAttack_1.getClickJacking);
router.post('/click-jacking', preventAttack_1.createClickJacking);
exports.default = router;
