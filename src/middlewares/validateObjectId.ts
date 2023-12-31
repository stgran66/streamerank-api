import { Request, Response, NextFunction } from 'express';
const mongoose = require('mongoose');
const { httpError } = require('../utils/httpError');

// validating if id is valid object id in MongoDB
const validateId = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    next(httpError(404));
  }
  next();
};

module.exports = validateId;
