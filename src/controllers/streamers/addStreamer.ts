import { Request, Response } from 'express';

const { Streamer } = require('../../models/streamer');

const addStreamer = async (req: Request, res: Response): Promise<void> => {
  const result = await Streamer.create({ ...req.body });

  res.status(201).json(result);
};

module.exports = addStreamer;
