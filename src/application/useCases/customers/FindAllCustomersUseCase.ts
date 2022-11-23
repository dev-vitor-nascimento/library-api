import { Customer } from "@domain/entities/Customer";
import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindAllCustomersUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) { }

    async execute(): Promise<Customer[]> {
        const customers = await this.customersRepository.findAll();

        return customers;
    }
}

export { FindAllCustomersUseCase }