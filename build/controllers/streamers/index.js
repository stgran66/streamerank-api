"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllStreamers = require('./getAll');
const getStreamerById = require('./getById');
const addStreamer = require('./add');
const voteStreamer = require('./vote');
module.exports = {
    getAllStreamers,
    getStreamerById,
    addStreamer,
    voteStreamer,
};
