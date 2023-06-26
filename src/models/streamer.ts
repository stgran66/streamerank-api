const { Schema, model } = require('mongoose');
const Joi = require('joi');

const streamerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set streamer's name"],
    },
    platform: {
      type: String,
      required: [true, "Set streamer's platform"],
    },
    description: { type: String },
    upvote: {
      type: Number,
      default: 0,
    },
    downvote: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

const addStreamerSchema = Joi.object({
  name: Joi.string().required(),
  platform: Joi.string().required(),
  description: Joi.string(),
});

const voteSchema = Joi.object({
  vote: Joi.string().valid('upvote', 'downvote').required(),
});

const streamerSchemas = {
  addStreamerSchema,
  voteSchema,
};

const Streamer = model('streamer', streamerSchema);

module.exports = { Streamer, streamerSchemas };
