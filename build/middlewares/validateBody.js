"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { httpError } = require('../utils/httpError');
// validating request body by joi
const validateBody = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(httpError(400, error.message));
        }
        next();
    };
    return func;
};
module.exports = validateBody;
