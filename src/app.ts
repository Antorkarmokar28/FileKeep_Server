import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app: Application = express();
// using parser
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());

const testServer = async (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "The Filekeep server is running...",
  });
};

app.get("/", testServer);

export default app;
