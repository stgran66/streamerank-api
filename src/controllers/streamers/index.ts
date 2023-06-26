const getAllStreamers = require('./getAll');
const getStreamerById = require('./getById');
const addStreamer = require('./addStreamer');
const voteStreamer = require('./vote');

module.exports = {
  getAllStreamers,
  getStreamerById,
  addStreamer,
  voteStreamer,
};
