import express, { Application, Request, Response, NextFunction } from 'express';
const cors = require('cors');

const { streamersRouter } = require('./routes/api');
const { HttpError } = require('./utils');

const app: Application = express();

app.use(cors());
app.use(express.json());

//Connecting stremers router
app.use('/streamers', streamersRouter);

// Handling invalid endpoints
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'not found' });
});

// Handling http errors
app.use(
  (
    err: typeof HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const { status = 500, message = 'Server Error' } = err;
    res.status(status).json({
      message,
    });
  }
);

module.exports = app;
