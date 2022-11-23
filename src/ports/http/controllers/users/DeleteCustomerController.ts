import { DeleteCustomerUseCase } from "@application/useCases/customers/DeleteCustomerUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class DeleteCustomerController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteCustomerUseCase = container.resolve(DeleteCustomerUseCase);

        await deleteCustomerUseCase.execute(id);

        return response.status(204).json();
    }
}

export { DeleteCustomerController }