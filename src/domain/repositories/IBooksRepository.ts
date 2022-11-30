import { Book } from "@domain/entities/BookEntity";
import { BookIncludePublisher } from "@domain/types/BookIncludePublisher";

interface IBooksRepository {
    create(book: Book, publisherId: string): Promise<BookIncludePublisher>;
    update(book: Book, publisherId: string): Promise<BookIncludePublisher>;
    delete(id: string): Promise<void>;
    findAll(): Promise<BookIncludePublisher[]>;
    findById(id: string): Promise<BookIncludePublisher | null>;
    findByTitleAndPublisher(title: string, publisherId: string): Promise<Book | null>;
}

export { IBooksRepository }