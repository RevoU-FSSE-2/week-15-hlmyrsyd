"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const origin = [
    "https://https://hlmyrsyd4.netlify.app",
    "https://week-9-hlmyrsyd.up.railway.app",
];
const partnerOrigin = [
    "https://week-15-mnajmytsss.vercel.app"
];
const corsOptionsDelegate = (req, callback) => {
    const clientOrigin = origin.includes(req.header("Origin") || "");
    const clientPartnerOrigin = partnerOrigin.includes(req.header("Origin") || "");
    if (clientOrigin) {
        callback(null, {
            origin: true,
            methods: "GET, POST, DELETE, PUT, OPTIONS, HEAD",
        });
    }
    else if (clientPartnerOrigin) {
        callback(null, {
            origin: true,
            methods: "GET, POST",
        });
    }
    else {
        callback(new Error("Blocked by CORS"));
    }
};
const corsMiddleware = (app) => {
    app.use((0, cors_1.default)(corsOptionsDelegate));
};
exports.default = corsMiddleware;
