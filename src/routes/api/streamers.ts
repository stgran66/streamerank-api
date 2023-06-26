import express, { Router } from 'express';
const {
  getAllStreamers,
  getStreamerById,
  addStreamer,
  voteStreamer,
} = require('../../controllers/streamers');
const { validateId, validateBody } = require('../../middlewares');
const { streamerSchemas } = require('../../models/streamer');

const { addStreamerSchema, voteSchema } = streamerSchemas;

const streamersRouter: Router = express.Router();

streamersRouter.get('/', getAllStreamers);

streamersRouter.post('/', validateBody(addStreamerSchema), addStreamer);

streamersRouter.get('/:id', validateId, getStreamerById);

streamersRouter.put(
  '/:id/vote',
  validateId,
  validateBody(voteSchema),
  voteStreamer
);

module.exports = streamersRouter;
