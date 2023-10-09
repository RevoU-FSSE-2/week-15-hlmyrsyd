"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodyParserMiddleware = (app) => {
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: true }));
};
exports.default = bodyParserMiddleware;
