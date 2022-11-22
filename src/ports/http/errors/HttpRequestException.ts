abstract class HttpRequestException {
    constructor(
        public readonly message: string,
        public readonly statusCode: number,
    ) { }
}

export { HttpRequestException }