"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const { streamersRouter } = require('./routes/api');
const { HttpError } = require('./utils');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
//Connecting stremers router
app.use('/streamers', streamersRouter);
// Handling invalid endpoints
app.use((req, res) => {
    res.status(404).json({ message: 'not found' });
});
// Handling http errors
app.use((err, req, res, next) => {
    const { status = 500, message = 'Server Error' } = err;
    res.status(status).json({
        message,
    });
});
module.exports = app;
