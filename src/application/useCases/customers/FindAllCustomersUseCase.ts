import { Customer } from "@domain/entities/Customer";
import { CustomersRepository } from "@infrastructure/repositories/customers/CustomersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindAllCustomersUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: CustomersRepository
    ) { }

    async execute(): Promise<Customer[]> {
        const customers = await this.customersRepository.findAll();

        return customers;
    }
}

export { FindAllCustomersUseCase }