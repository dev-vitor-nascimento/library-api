import { Customer } from "@domain/entities/Customer";
import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { injectable, inject } from "tsyringe";

@injectable()
class UpdateCustomerUseCase {
    constructor(
        @inject("CustomersRepository")
        private customerRepository: ICustomersRepository
    ) { }

    async execute({ id, name, email, city, address }: Customer): Promise<Customer> {

        const userNotExists = await this.customerRepository.findById(id!);

        if (!userNotExists) {
            throw new BadRequestException("User not exists.");
        }

        const customerAlreadyExists = await this.customerRepository.findByEmail(email);

        if (customerAlreadyExists && (customerAlreadyExists.id != userNotExists.id)) {
            throw new BadRequestException("Email already exists.");
        }

        const customer = await this.customerRepository.update({
            id,
            name,
            email,
            city,
            address
        });

        return customer;
    }

}

export { UpdateCustomerUseCase }