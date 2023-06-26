import { Request, Response } from 'express';

const { Streamer } = require('../../models/streamer');

const voteStreamer = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const { vote } = req.body;

  const result = await Streamer.findByIdAndUpdate(
    { _id: id },
    {
      $inc: {
        [vote]: 1,
      },
    },
    {
      new: true,
    }
  );

  res.status(201).json(result);
};

module.exports = voteStreamer;
