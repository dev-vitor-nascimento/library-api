import { Customer } from "@domain/entities/Customer";
import { CustomersRepository } from "@infrastructure/repositories/customers/CustomersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class FindCustomerByIdUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: CustomersRepository
    ) { }

    async execute(id: string): Promise<Customer> {
        const customer = await this.customersRepository.findById(id);

        if (!customer) {
            throw new BadRequestException("Customer not exists.");
        }

        return customer;
    }
}

export { FindCustomerByIdUseCase }