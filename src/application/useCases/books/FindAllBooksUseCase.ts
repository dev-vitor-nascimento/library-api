import { IBooksRepository } from "@domain/repositories/IBooksRepository";
import { BookIncludePublisher } from "@domain/types/BookIncludePublisher";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class FindAllBooksUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }

    async execute(): Promise<BookIncludePublisher[]> {
        const books = await this.booksRepository.findAll();

        return books;
    }
}

export { FindAllBooksUseCase }