import { Request, Response } from 'express';
import { Error } from 'mongoose';

const { Streamer } = require('../../models/streamer');

const addStreamer = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Streamer.create({ ...req.body });

    res.status(201).json(result);
  } catch (err) {
    // Handling validation error from mongoose
    if (err instanceof Error.ValidationError) {
      res.status(400).send(err.errors);
    }
  }
};

module.exports = addStreamer;
