import cors, { CorsOptionsDelegate } from 'cors';
import { Express } from 'express';

const origin: string[] = [
    "https://https://hlmyrsyd4.netlify.app", 
    "https://week-9-hlmyrsyd.up.railway.app",
];
const partnerOrigin: string[] = [
    "https://week-15-mnajmytsss.vercel.app" 
];

const corsOptionsDelegate: CorsOptionsDelegate = (req, callback) => {
    const clientOrigin: boolean = origin.includes(req.header("Origin") || "");
    const clientPartnerOrigin: boolean = partnerOrigin.includes(req.header("Origin") || "");

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

const corsMiddleware = (app: Express): void => {
    app.use(cors(corsOptionsDelegate));
};

export default corsMiddleware;
