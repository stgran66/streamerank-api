"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { Streamer } = require('../../models/streamer');
const voteStreamer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { vote } = req.body;
        const result = yield Streamer.findByIdAndUpdate({ _id: id }, 
        // incresing upvote or downvote count
        {
            $inc: {
                [vote]: 1,
            },
        }, {
            new: true,
        });
        res.status(201).json(result);
    }
    catch (err) {
        // handling mongoose validation error
        if (err instanceof mongoose_1.Error.ValidationError) {
            res.status(400).send(err.errors);
        }
    }
});
module.exports = voteStreamer;
