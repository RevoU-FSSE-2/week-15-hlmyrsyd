"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser_1 = __importDefault(require("./bodyParser"));
const cors_1 = __importDefault(require("./cors"));
const helmet_1 = __importDefault(require("./helmet"));
const morgan_1 = __importDefault(require("./morgan"));
const request_1 = __importDefault(require("./request"));
const useMiddleware = (app) => {
    (0, request_1.default)(app);
    (0, helmet_1.default)(app);
    (0, cors_1.default)(app);
    (0, morgan_1.default)(app);
    (0, bodyParser_1.default)(app);
};
exports.default = useMiddleware;
