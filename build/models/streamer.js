"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const Joi = require('joi');
// Valid streamer's platforms
const platforms = ['twitch', 'youtube', 'tiktok', 'kick', 'rumble'];
const streamerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set streamer's name"],
    },
    platform: {
        type: String,
        enum: platforms,
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
    avatar: {
        type: String,
        default: 'https://i.pravatar.cc/300',
    },
}, { versionKey: false });
// Joi schema for adding streamer
const addStreamerSchema = Joi.object({
    name: Joi.string().required(),
    platform: Joi.string()
        .required()
        .valid(...platforms),
    description: Joi.string(),
});
// Joi schema for voting for streamer
const voteSchema = Joi.object({
    vote: Joi.string().valid('upvote', 'downvote').required(),
});
const streamerSchemas = {
    addStreamerSchema,
    voteSchema,
};
const Streamer = model('streamer', streamerSchema);
module.exports = { Streamer, streamerSchemas };
