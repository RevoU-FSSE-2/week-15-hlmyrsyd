import { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const origin = ["http://127.0.0.1:5500"];
const partnerOrigin = ["http://192.168.0.134/:53500"];

const corsOptionDelegate = (req: Request, callback: (error: Error | null, options?: object) => void) => {
    const clientOrigin = origin.includes(req.header("Origin"));
    const clientPartnerOrigin = partnerOrigin.includes(req.header("Origin"));

    if (clientOrigin) {
        callback(null, {
            origin: true,
            methods: "GET, POST, DELETE, PUT, OPTIONS, HEAD",
        });
    } else if (clientPartnerOrigin) {
        callback(null, {
            origin: true,
            methods: "GET, POST",
        });
    } else {
        callback(new Error("Blocked by CORS"));
    }
};

const corsMiddleware = (app: any) => {
    app.use(cors(corsOptionDelegate));
};

export default corsMiddleware;