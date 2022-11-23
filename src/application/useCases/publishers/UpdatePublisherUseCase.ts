import { Publisher } from "@domain/entities/Publisher";
import { IPublishersRepository } from "@domain/repositories/IPublishersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdatePublisherUseCase {

    constructor(
        @inject("PublishersRepository")
        private publishersRepository: IPublishersRepository
    ) { }

    async execute({ id, name, city }: Publisher): Promise<Publisher> {

        const publisherNotExists = await this.publishersRepository.findById(id!);

        if (!publisherNotExists) {
            throw new BadRequestException("Publisher not exists.");
        }

        const publisherAlreadyExists = await this.publishersRepository.findByName(name);

        if (publisherAlreadyExists && (publisherAlreadyExists.id != id)) {
            throw new BadRequestException("Name already in use.");
        }

        const publisher = await this.publishersRepository.update({
            id,
            name,
            city
        })

        return publisher;
    }
}

export { UpdatePublisherUseCase }