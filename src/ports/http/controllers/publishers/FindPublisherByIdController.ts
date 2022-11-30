import { FindPublisherByIdUseCase } from "@application/useCases/publishers/FindPublisherByIdUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FindPublisherByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findPublisherByIdUseCase = container.resolve(FindPublisherByIdUseCase);

        const publisher = await findPublisherByIdUseCase.execute(id);

        return response.json(publisher);
    }
}

export { FindPublisherByIdController }