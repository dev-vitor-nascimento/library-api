import { CreateCustomerUseCase } from '@application/useCases/customers/CreateCustomerUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, city, address } = request.body;

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

        const customer = await createCustomerUseCase.execute({
            name,
            email,
            city,
            address
        });

        return response.status(201).json(customer);
    }
}

export { CreateCustomerController }