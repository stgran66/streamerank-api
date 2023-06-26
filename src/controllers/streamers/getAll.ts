import { Request, Response } from 'express';

const { Streamer } = require('../../models/streamer');
const { httpError } = require('../../utils/httpError');

const getAllStreamers = async (req: Request, res: Response): Promise<void> => {
  const result = await Streamer.find({});

  if (!result) {
    throw httpError(404);
  }

  res.json(result);
};

module.exports = getAllStreamers;
