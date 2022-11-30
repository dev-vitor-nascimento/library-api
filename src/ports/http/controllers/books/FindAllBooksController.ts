import { FindAllBooksUseCase } from "@application/useCases/books/FindAllBooksUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FindAllBooksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findAllBooksUseCase = container.resolve(FindAllBooksUseCase);

        const books = await findAllBooksUseCase.execute();

        return response.json(books);
    }
}

export { FindAllBooksController }