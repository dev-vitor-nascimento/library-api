import { DeletePublisherUseCase } from "@application/useCases/publishers/DeletePublisherUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class DeletePublisherController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deletePublisherUseCase = container.resolve(DeletePublisherUseCase);

        await deletePublisherUseCase.execute(id);

        response.status(204).json();
    }
}

export { DeletePublisherController }