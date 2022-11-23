import { UpdateCustomerUseCase } from '@application/useCases/customers/UpdateCustomerUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UpdateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, email, city, address } = request.body;

        const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);

        const customer = await updateCustomerUseCase.execute({
            id,
            name,
            email,
            city,
            address
        });

        return response.status(201).json(customer);
    }
}

export { UpdateCustomerController }