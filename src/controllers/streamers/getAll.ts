import { NextFunction, Request, Response } from 'express';

const { Streamer } = require('../../models/streamer');
const { httpError } = require('../../utils/httpError');

const getAllStreamers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await Streamer.find({});

  if (!result) {
    // handling empty response
    next(httpError(404));
  }

  res.json(result);
};

module.exports = getAllStreamers;
