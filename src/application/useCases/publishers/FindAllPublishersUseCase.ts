import { Publisher } from "@domain/entities/Publisher";
import { IPublishersRepository } from "@domain/repositories/IPublishersRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class FindAllPublishersUseCase {

    constructor(
        @inject("PublishersRepository")
        private publishersRepository: IPublishersRepository
    ) { }

    async execute(): Promise<Publisher[]> {
        const publishers = await this.publishersRepository.findAll();

        return publishers;
    }
}

export { FindAllPublishersUseCase }