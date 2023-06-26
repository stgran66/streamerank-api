import express, { Application, Request, Response } from 'express';
const cors = require('cors');
const streamersRouter = require('./routes/api/streamers.ts');

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/streamers', streamersRouter);

module.exports = app;
