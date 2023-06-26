import express, { Request, Response } from 'express';

const streamersRouter = express.Router();

streamersRouter.get('/', (req: Request, res: Response) => {
  console.log('Getting streamers');
  res.send('ok');
});

streamersRouter.post('/', (req: Request, res: Response) => {
  console.log('posting new streamer');
  res.send('ok');
});

streamersRouter.get('/:id', (req: Request, res: Response) => {
  console.log('Getting streamer by id');
  res.send('ok');
});

streamersRouter.put('/:id/vote', (req: Request, res: Response) => {
  console.log('Voting for streamer by id');
  res.send('ok');
});

module.exports = streamersRouter;
