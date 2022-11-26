import { Router } from "express";
import { validationHandler } from "../middlewares/validationHandler";
import { CreateBookController } from "../controllers/books/CreateBookController";
import { UpdateBookController } from "../controllers/books/UpdateBookController";
import { DeleteBookController } from "../controllers/books/DeleteBookController";
import { FindBookByIdController } from "../controllers/books/FindBookByIdController";
import { FindAllBooksController } from "../controllers/books/FindAllBooksController";
import { bookValidation } from "@domain/validation/BookValidation";
import { idValidation } from "@domain/validation/idValidation";

const booksRoutes = Router();

const createBookController = new CreateBookController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();
const findBookByIdController = new FindBookByIdController();
const findAllBooksController = new FindAllBooksController();

booksRoutes.post("/", validationHandler(bookValidation), createBookController.handle);
booksRoutes.put("/:id", validationHandler([...idValidation, ...bookValidation]), updateBookController.handle);
booksRoutes.delete("/:id", validationHandler(idValidation), deleteBookController.handle);
booksRoutes.get("/:id", validationHandler(idValidation), findBookByIdController.handle);
booksRoutes.get("/", findAllBooksController.handle);

export { booksRoutes }