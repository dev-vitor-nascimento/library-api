import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

function validationHandler(validation: ValidationChain[]) {
    const handler = (request: Request, response: Response, next: NextFunction) => {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(404).json({
                message: errors.array()[0].msg
            });
        }
        return next();
    };

    return [
        ...validation,
        handler
    ]
}


export { validationHandler }