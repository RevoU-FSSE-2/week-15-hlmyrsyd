"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const requestMiddleware = (req, res, next) => {
    if (req.headers["x-request-id"]) {
        res.setHeader("x-request-id", req.headers["x-request-id"]);
        req.requestId = req.headers["x-request-id"];
    }
    else {
        const uuid = (0, uuid_1.v4)();
        res.setHeader("x-request-id", uuid);
        req.requestId = uuid;
    }
    next();
};
exports.default = requestMiddleware;
