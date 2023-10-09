"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preventAttackController_1 = require("../controller/preventAttackController");
const router = (0, express_1.Router)();
router.get('/xss', preventAttackController_1.getDataXss);
router.get('/click-jacking', preventAttackController_1.getClickJacking);
router.post('/click-jacking', preventAttackController_1.createClickJacking);
exports.default = router;
