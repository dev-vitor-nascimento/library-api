import 'express-async-errors';
import express from 'express';
import { router } from '@ports/http/routes';
import { errorHandler } from '@ports/http/middlewares/errorHandler';

const server = express();
server.use(express.json());

server.use(router);

server.use(errorHandler);

export { server }