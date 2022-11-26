import { FindBookByIdUseCase } from "@application/useCases/books/FindBookByIdUseCase";
import { FindPublisherByIdUseCase } from "@application/useCases/publishers/FindPublisherByIdUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FindBookByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findBookByIdUseCase = container.resolve(FindBookByIdUseCase);

        const book = await findBookByIdUseCase.execute(id);

        response.json(book);
    }
}

export { FindBookByIdController }