import { Publisher } from "@domain/entities/Publisher";
import { IPublishersRepository } from "@domain/repositories/IPublishersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class CreatePublisherUseCase {

    constructor(
        @inject("PublishersRepository")
        private publishersRepository: IPublishersRepository
    ) { }

    async execute({ name, city }: Publisher): Promise<Publisher> {
        const publisherAlreadyExists = await this.publishersRepository.findByName(name);

        if (publisherAlreadyExists) {
            throw new BadRequestException("Publisher already exists.");
        }

        const publisher = await this.publishersRepository.create({
            name,
            city
        })

        return publisher;
    }
}

export { CreatePublisherUseCase }