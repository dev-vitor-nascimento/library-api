import { Router } from "express";
import { booksRoutes } from "./books.routes";
import { customersRoutes } from "./customers.routes";
import { publisherRoutes } from "./publishers.routes";

const router = Router();

router.use("/customers", customersRoutes);
router.use("/publishers", publisherRoutes);
router.use("/books", booksRoutes);

export { router }