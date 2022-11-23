import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCustomerUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) { }

    async execute(id: string): Promise<void> {
        const customerNotExists = await this.customersRepository.findById(id);

        if (!customerNotExists) {
            throw new BadRequestException("Customer not exists.")
        }

        await this.customersRepository.delete(id);
    }
}

export { DeleteCustomerUseCase }