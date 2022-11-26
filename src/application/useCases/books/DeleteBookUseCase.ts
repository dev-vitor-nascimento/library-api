import { IBooksRepository } from "@domain/repositories/IBooksRepository";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteBookUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }

    async execute(id: string): Promise<void> {
        const bookDoesNotExists = await this.bookDoesNotExists(id);

        if (bookDoesNotExists) {
            throw new BadRequestException("Book does not Exists.");
        }

        await this.booksRepository.delete(id);
    }

    private async bookDoesNotExists(id: string): Promise<boolean> {
        const book = await this.booksRepository.findById(id);

        return book ? false : true;
    }
}

export { DeleteBookUseCase }