import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import globalErrorHandeling from './app/middlewares/globalErrorHandeling';
import notFound from './app/middlewares/notFound';
const app: Application = express();
// using parser
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());

const testServer = async (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'The Filekeep server is running...',
  });
};

app.get('/', testServer);

// global error handeler
app.use(globalErrorHandeling);
// not found router handeler
app.use(notFound);

export default app;
