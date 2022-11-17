import 'express-async-errors';
import express from 'express';

const server = express();

server.use(express.json());

export { server }