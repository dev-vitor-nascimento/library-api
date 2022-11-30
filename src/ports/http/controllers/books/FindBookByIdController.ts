import { FindBookByIdUseCase } from "@application/useCases/books/FindBookByIdUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FindBookByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findBookByIdUseCase = container.resolve(FindBookByIdUseCase);

        const book = await findBookByIdUseCase.execute(id);

        return response.json(book);
    }
}

export { FindBookByIdController }