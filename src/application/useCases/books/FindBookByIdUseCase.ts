import { IBooksRepository } from "@domain/repositories/IBooksRepository";
import { BookIncludePublisher } from "@domain/types/BookIncludePublisher";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class FindBookByIdUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }

    async execute(id: string): Promise<BookIncludePublisher> {
        const book = await this.booksRepository.findById(id);

        if (!book) {
            throw new BadRequestException("Book does not exists.");
        }

        return book;
    }
}

export { FindBookByIdUseCase }