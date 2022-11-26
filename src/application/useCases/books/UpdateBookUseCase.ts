import { Book } from "@domain/entities/BookEntity";
import { IBooksRepository } from "@domain/repositories/IBooksRepository";
import { BookIncludePublisher } from "@domain/types/BookIncludePublisher";
import { BadRequestException } from "@ports/http/errors/BadRequestException";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateBookUseCase {

    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }

    async execute({ id, title, author, releaseYear }: Book, publisherId: string): Promise<BookIncludePublisher> {
        const bookAlreadyExists = await this.bookAlreadyExists(id!, title, publisherId);

        if (bookAlreadyExists) {
            throw new BadRequestException("Book already Exists.");
        }

        const book = await this.booksRepository.update(
            {
                id,
                title,
                author,
                releaseYear
            },
            publisherId
        );

        return book;
    }

    private async bookAlreadyExists(id: string, title: string, publisherId: string): Promise<boolean> {
        const book = await this.booksRepository.findByTitleAndPublisher(
            title,
            publisherId
        );

        if (book && (book.id != id)) {
            return true;
        }

        return false
    }
}

export { UpdateBookUseCase }