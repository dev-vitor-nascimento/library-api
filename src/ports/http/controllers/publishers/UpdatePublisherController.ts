import { UpdatePublisherUseCase } from "@application/useCases/publishers/UpdatePublisherUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class UpdatePublisherController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, city } = request.body;

        const updatePublisherUseCase = container.resolve(UpdatePublisherUseCase);

        const publisher = await updatePublisherUseCase.execute({
            id,
            name,
            city
        });

        response.json(publisher);
    }
}

export { UpdatePublisherController }