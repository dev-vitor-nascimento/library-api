import { Book } from "@domain/entities/BookEntity";
import { IBooksRepository } from "@domain/repositories/IBooksRepository";
import { BookIncludePublisher } from "@domain/types/BookIncludePublisher";
import { client } from "@infrastructure/database/client";

class BooksRepository implements IBooksRepository {
    async create({ title, author, releaseYear }: Book, publisherId: string): Promise<BookIncludePublisher> {
        const book = await client.book.create({
            data: {
                title,
                author,
                releaseYear,
                publisher: {
                    connect: {
                        id: publisherId
                    }
                }
            },
            include: {
                publisher: true
            }
        });

        return book;
    }

    async update({ id, title, author, releaseYear }: Book, publisherId: string): Promise<BookIncludePublisher> {
        const book = await client.book.update({
            where: {
                id
            },
            data: {
                title,
                author,
                releaseYear,
                publisher: {
                    connect: {
                        id: publisherId
                    }
                }
            },
            include: {
                publisher: true
            }
        });

        return book;
    }

    async delete(id: string): Promise<void> {
        await client.book.delete({
            where: {
                id
            }
        });
    }

    async findAll(): Promise<BookIncludePublisher[]> {
        const books = await client.book.findMany({
            include: {
                publisher: true
            }
        });

        return books;
    }

    async findById(id: string): Promise<BookIncludePublisher | null> {
        const book = await client.book.findUnique({
            where: {
                id
            },
            include: {
                publisher: true
            }
        });

        return book;
    }

    async findByTitleAndPublisher(title: string, publisherId: string): Promise<Book | null> {
        const book = await client.book.findUnique({
            where: {
                title_publisherId: {
                    title,
                    publisherId
                }
            }
        });

        return book;
    }
}

export { BooksRepository }