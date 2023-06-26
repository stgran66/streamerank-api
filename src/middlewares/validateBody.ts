import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

const { httpError } = require('../utils/httpError');

const validateBody = (schema: Schema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(httpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
