import { FindAllPublishersUseCase } from "@application/useCases/publishers/FindAllPublishersUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FindAllPublishersController {
    async handle(request: Request, response: Response) {
        const findAllPublishersUseCase = container.resolve(FindAllPublishersUseCase);

        const publishers = await findAllPublishersUseCase.execute();

        response.json(publishers);
    }
}

export { FindAllPublishersController }