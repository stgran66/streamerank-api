import { Request, Response } from 'express';
import { Error } from 'mongoose';

const { Streamer } = require('../../models/streamer');

const voteStreamer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { vote } = req.body;

    const result = await Streamer.findByIdAndUpdate(
      { _id: id },
      // incresing upvote or downvote count
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
  } catch (err) {
    // handling mongoose validation error
    if (err instanceof Error.ValidationError) {
      res.status(400).send(err.errors);
    }
  }
};

module.exports = voteStreamer;
