import { Customer } from "@domain/entities/Customer";

interface ICustomersRepository {
    create(customer: Customer): Promise<Customer>;
    findByEmail(email: string): Promise<Customer | null>;
}

export { ICustomersRepository }