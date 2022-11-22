import { Customer } from "@domain/entities/Customer";
import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { injectable, inject } from "tsyringe";

@injectable()
class CreateCustomerUseCase {
    constructor(
        @inject("CustomersRepository")
        private customerRepository: ICustomersRepository
    ) { }

    async execute({ name, email, city, address }: Customer): Promise<Customer> {

        const customerAlreadyExists = await this.customerRepository.findByEmail(email);

        if (customerAlreadyExists) {
            throw new BadRequestException("Email already exists.");
        }

        const customer = await this.customerRepository.create({
            name,
            email,
            city,
            address
        });

        return customer;
    }

}

export { CreateCustomerUseCase }