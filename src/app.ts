import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./error/handleError";

import cors from "cors";


const app: Application = express();
app.use(express.json());

app.use(
    cors({
        origin: true,
    })
);
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(handlreErrors);
export default app;