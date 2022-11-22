import "dotenv/config";
import "reflect-metadata";
import "@infrastructure/config/container";
import { server } from "@infrastructure/webserver/express";

server.listen(process.env.PORT ?? 3000);