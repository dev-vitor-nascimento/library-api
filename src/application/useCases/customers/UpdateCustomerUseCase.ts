import { Customer } from "@domain/entities/Customer";
import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { injectable, inject } from "tsyringe";

@injectable()
class UpdateCustomerUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) { }

    async execute({ id, name, email, city, address }: Customer): Promise<Customer> {
        const customerNotExists = await this.customersRepository.findById(id!);

        if (!customerNotExists) {
            throw new BadRequestException("Customer not exists.");
        }

        const emailAlreadyInUse = await this.customersRepository.findByEmail(email);

        if (emailAlreadyInUse && (emailAlreadyInUse.id != id)) {
            throw new BadRequestException("Email already in use.");
        }

        const customer = await this.customersRepository.update({
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