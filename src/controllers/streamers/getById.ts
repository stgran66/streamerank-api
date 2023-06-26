import { NextFunction, Request, Response } from 'express';

const { Streamer } = require('../../models/streamer');
const { httpError } = require('../../utils/httpError');

const getStreamerById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const result = await Streamer.findById(id);

  if (!result) {
    return next(httpError(409));
  }

  res.json(result);
};

module.exports = getStreamerById;
