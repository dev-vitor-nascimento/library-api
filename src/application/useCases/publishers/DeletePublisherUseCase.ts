import { Publisher } from "@domain/entities/Publisher";
import { IPublishersRepository } from "@domain/repositories/IPublishersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class DeletePublisherUseCase {

    constructor(
        @inject("PublishersRepository")
        private publishersRepository: IPublishersRepository
    ) { }

    async execute(id: string): Promise<void> {

        const publisherNotExists = await this.publishersRepository.findById(id!);

        if (!publisherNotExists) {
            throw new BadRequestException("Publisher not exists.");
        }

        await this.publishersRepository.delete(id);
    }
}

export { DeletePublisherUseCase }