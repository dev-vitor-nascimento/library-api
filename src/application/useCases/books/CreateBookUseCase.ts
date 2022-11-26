import { Book } from "@domain/entities/BookEntity";
import { IBooksRepository } from "@domain/repositories/IBooksRepository";
import { BookIncludePublisher } from "@domain/types/BookIncludePublisher";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateBookUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }

    async execute({ title, author, releaseYear }: Book, publisherId: string): Promise<BookIncludePublisher> {
        const bookAlreadyExists = await this.bookAlreadyExists(title, publisherId);

        if (bookAlreadyExists) {
            throw new BadRequestException("Book already Exists.");
        }

        const book = await this.booksRepository.create(
            {
                title,
                author,
                releaseYear
            },
            publisherId
        );

        return book;
    }

    private async bookAlreadyExists(title: string, publisherId: string): Promise<boolean> {
        const book = await this.booksRepository.findByTitleAndPublisher(
            title,
            publisherId
        );

        return book ? true : false;
    }
}

export { CreateBookUseCase }