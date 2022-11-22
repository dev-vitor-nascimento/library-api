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

    async update({ id, name, email, city, address }: Customer): Promise<Customer> {
        const customer = await client.customer.update({
            where: {
                id
            },
            data: {
                name,
                email,
                city,
                address
            }
        });

        return customer;
    }

    async delete(id: string): Promise<void> {
        await client.customer.delete({
            where: {
                id
            }
        });
    }

    async findAll(): Promise<Customer[]> {
        const customers = await client.customer.findMany();

        return customers;
    }

    async findById(id: string): Promise<Customer | null> {
        const customer = await client.customer.findUnique({
            where: {
                id
            }
        })

        return customer;
    }

    async findByEmail(email: string): Promise<Customer | null> {
        const customer = await client.customer.findUnique({
            where: {
                email
            }
        });

        return customer;
    }
}

export { CustomersRepository }