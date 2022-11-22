import { HttpRequestException } from "./HttpRequestException";

class BadRequestException extends HttpRequestException {
    constructor(message: string) {
        super(message, 400);
    };
}

export { BadRequestException }