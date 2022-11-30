import { Router } from "express";
import { CreateBookController } from "../controllers/books/CreateBookController";
import { UpdateBookController } from "../controllers/books/UpdateBookController";
import { DeleteBookController } from "../controllers/books/DeleteBookController";
import { FindBookByIdController } from "../controllers/books/FindBookByIdController";
import { FindAllBooksController } from "../controllers/books/FindAllBooksController";

const booksRoutes = Router();

const createBookController = new CreateBookController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();
const findBookByIdController = new FindBookByIdController();
const findAllBooksController = new FindAllBooksController();

booksRoutes.post("/", createBookController.handle);
booksRoutes.put("/:id", updateBookController.handle);
booksRoutes.delete("/:id", deleteBookController.handle);
booksRoutes.get("/:id", findBookByIdController.handle);
booksRoutes.get("/", findAllBooksController.handle);

export { booksRoutes }