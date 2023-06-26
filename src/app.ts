import express, { Application, Request, Response, NextFunction } from 'express';
const cors = require('cors');
const streamersRouter = require('./routes/api/streamers.ts');
const { HttpError } = require('./utils/httpError');

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/streamers', streamersRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'not found' });
});

app.use(
  (
    err: typeof HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    console.log('sdsdasddddddddddddddddddddddddddddddddddddddddddddddddddd');
    const { status = 500, message = 'Server Error' } = err;
    res.status(status).json({
      message,
    });
  }
);

module.exports = app;
