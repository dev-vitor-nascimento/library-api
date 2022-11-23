import { Publisher } from "@domain/entities/Publisher";
import { IPublishersRepository } from "@domain/repositories/IPublishersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class FindPublisherByIdUseCase {

    constructor(
        @inject("PublishersRepository")
        private publishersRepository: IPublishersRepository
    ) { }

    async execute(id: string): Promise<Publisher | null> {
        const publisher = await this.publishersRepository.findById(id!);

        if (!publisher) {
            throw new BadRequestException("Publisher not exists.");
        }

        return publisher;
    }
}

export { FindPublisherByIdUseCase }