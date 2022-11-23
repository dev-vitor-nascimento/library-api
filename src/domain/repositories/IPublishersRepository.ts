import { Publisher } from "@domain/entities/Publisher";

interface IPublishersRepository {
    create(publisher: Publisher): Promise<Publisher>;
    update(publisher: Publisher): Promise<Publisher>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Publisher[]>;
    findById(id: string): Promise<Publisher | null>;
    findByName(name: string): Promise<Publisher | null>;
}

export { IPublishersRepository }