import { UpdateBookUseCase } from "@application/useCases/books/UpdateBookUseCase";
import { UpdatePublisherUseCase } from "@application/useCases/publishers/UpdatePublisherUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class UpdateBookController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { title, author, release_year, publisher_id } = request.body;

        const updateBookUseCase = container.resolve(UpdateBookUseCase);

        const book = await updateBookUseCase.execute(
            {
                id,
                title,
                author,
                releaseYear: release_year
            },
            publisher_id
        );

        response.json(book);
    }
}

export { UpdateBookController }