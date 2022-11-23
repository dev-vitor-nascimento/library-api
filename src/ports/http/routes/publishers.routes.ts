import { Router } from "express";
import { idValidation } from "@domain/validation/idValidation";
import { validationHandler } from "../middlewares/validationHandler";
import { CreatePublisherController } from "../controllers/publishers/CreatePublisherController";
import { UpdatePublisherController } from "../controllers/publishers/UpdatePublisherController";
import { DeletePublisherController } from "../controllers/publishers/DeletePublisherController";
import { FindPublisherByIdController } from "../controllers/publishers/FindPublisherByIdController";
import { FindAllPublishersController } from "../controllers/publishers/FindAllPublishersController";
import { publisherValidation } from "@domain/validation/PublisherValidation";

const publisherRoutes = Router();

const createPublisherController = new CreatePublisherController();
const updatePublisherController = new UpdatePublisherController();
const deletePublisherController = new DeletePublisherController();
const findPublisherByIdController = new FindPublisherByIdController();
const findAllPublishersController = new FindAllPublishersController();

publisherRoutes.post("/", validationHandler(publisherValidation), createPublisherController.handle);
publisherRoutes.put("/:id", validationHandler([...idValidation, ...publisherValidation]), updatePublisherController.handle);
publisherRoutes.delete("/:id", validationHandler(idValidation), deletePublisherController.handle);
publisherRoutes.get("/:id", validationHandler(idValidation), findPublisherByIdController.handle);
publisherRoutes.get("/", findAllPublishersController.handle);

export { publisherRoutes }