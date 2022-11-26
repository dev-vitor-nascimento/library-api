import { DeleteBookUseCase } from "@application/useCases/books/DeleteBookUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class DeleteBookController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteBookUseCase = container.resolve(DeleteBookUseCase);

        await deleteBookUseCase.execute(id);

        response.status(204).json();
    }
}

export { DeleteBookController }