"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { httpError } = require('../utils/httpError');
// validating if id is valid object id in MongoDB
const validateId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        next(httpError(404));
    }
    next();
};
module.exports = validateId;
