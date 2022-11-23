import { FindCustomerByIdUseCase } from "@application/useCases/customers/FindCustomerByIdUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FindCustomerByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findCustomerByIdUseCase = container.resolve(FindCustomerByIdUseCase);

        const customer = await findCustomerByIdUseCase.execute(id);

        return response.json(customer);
    }
}

export { FindCustomerByIdController }