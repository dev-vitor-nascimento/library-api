import { FindAllCustomersUseCase } from "@application/useCases/customers/FindAllCustomersUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FindAllCustomersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findAllCustomersUseCase = container.resolve(FindAllCustomersUseCase);

        const customers = await findAllCustomersUseCase.execute();

        return response.json(customers);
    }
}

export { FindAllCustomersController }