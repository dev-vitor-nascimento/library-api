import { Book } from "@domain/entities/BookEntity";
import { Publisher } from "@prisma/client";

type BookIncludePublisher = Book & { publisher: Publisher }

export { BookIncludePublisher }