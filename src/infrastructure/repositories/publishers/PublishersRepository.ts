import { Publisher } from "@domain/entities/Publisher";
import { IPublishersRepository } from "@domain/repositories/IPublishersRepository";
import { client } from "@infrastructure/database/client";

class PublishersRepository implements IPublishersRepository {

    async create({ name, city }: Publisher): Promise<Publisher> {
        const publisher = await client.publisher.create({
            data: {
                name,
                city
            }
        });

        return publisher;
    }

    async update({ id, name, city }: Publisher): Promise<Publisher> {
        const publisher = await client.publisher.update({
            where: {
                id
            },
            data: {
                name,
                city
            }
        });

        return publisher;
    }

    async delete(id: string): Promise<void> {
        await client.publisher.delete({
            where: {
                id
            }
        });
    }

    async findAll(): Promise<Publisher[]> {
        const publishers = await client.publisher.findMany()

        return publishers;
    }

    async findById(id: string): Promise<Publisher | null> {
        const publisher = await client.publisher.findUnique({
            where: {
                id
            }
        });

        return publisher;
    }

    async findByName(name: string): Promise<Publisher | null> {
        const publisher = await client.publisher.findUnique({
            where: {
                name
            }
        });

        return publisher;
    }

}

export { PublishersRepository }