"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { getAllStreamers, getStreamerById, addStreamer, voteStreamer, } = require('../../controllers/streamers');
const { validateId, validateBody } = require('../../middlewares');
const { streamerSchemas } = require('../../models/streamer');
const { addStreamerSchema, voteSchema } = streamerSchemas;
const streamersRouter = express_1.default.Router();
streamersRouter.get('/', getAllStreamers);
streamersRouter.post('/', validateBody(addStreamerSchema), addStreamer);
streamersRouter.get('/:id', validateId, getStreamerById);
streamersRouter.put('/:id/vote', validateId, validateBody(voteSchema), voteStreamer);
module.exports = streamersRouter;
