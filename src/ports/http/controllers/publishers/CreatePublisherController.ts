import { CreatePublisherUseCase } from "@application/useCases/publishers/CreatePublisherUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CreatePublisherController {
    async handle(request: Request, response: Response) {
        const { name, city } = request.body;

        const createPublisherUseCase = container.resolve(CreatePublisherUseCase);

        const publisher = await createPublisherUseCase.execute({
            name,
            city
        });

        response.status(201).json(publisher);
    }
}

export { CreatePublisherController }