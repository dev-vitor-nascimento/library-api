import 'dotenv/config';
import { server } from "./infrastructure/webserver/express";

server.listen(process.env.PORT ?? 3000);