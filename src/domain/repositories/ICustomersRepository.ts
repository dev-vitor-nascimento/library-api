import { Customer } from "@domain/entities/Customer";

interface ICustomersRepository {
    create(customer: Customer): Promise<Customer>;
    update(id: string, customer: Customer): Promise<Customer>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Customer[]>;
    findById(id: string): Promise<Customer | null>;
    findByEmail(email: string): Promise<Customer | null>;
}

export { ICustomersRepository }