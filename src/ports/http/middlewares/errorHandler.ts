import { HttpRequestException } from "@ports/http/errors/HttpRequestException";
import { NextFunction, Request, Response } from "express";

function errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
    if (error instanceof HttpRequestException) {
        return response.status(error.statusCode).json({
            message: error.message
        });
    }

    return response.status(500).json({
        message: `Internal server error - ${error.message}`
    });
}

export { errorHandler }