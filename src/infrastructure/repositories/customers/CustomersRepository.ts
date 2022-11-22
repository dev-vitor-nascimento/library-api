import { Customer } from "@domain/entities/Customer";
import { ICustomersRepository } from "@domain/repositories/ICustomersRepository";
import { client } from "@infrastructure/database/client";

class CustomersRepository implements ICustomersRepository {
    async create({ name, email, city, address }: Customer): Promise<Customer> {

        const customer = await client.customer.create({
            data: {
                name,
                email,
                city,
                address
            }
        });

        return customer;
    }

    async findByEmail(email: string): Promise<Customer | null> {
        const customer = await client.customer.findFirst({
            where: {
                email
            }
        });

        return customer;
    }

}

export { CustomersRepository }