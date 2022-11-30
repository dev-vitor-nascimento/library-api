import { CreateBookUseCase } from "@application/useCases/books/CreateBookUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CreateBookController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, author, release_year, publisher_id } = request.body;

        const createBookUseCase = container.resolve(CreateBookUseCase);

        const book = await createBookUseCase.execute(
            {
                title,
                author,
                releaseYear: release_year,
            },
            publisher_id
        );

        return response.status(201).json(book);
    }
}

export { CreateBookController }