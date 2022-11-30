import { Router } from "express";
import { CreatePublisherController } from "../controllers/publishers/CreatePublisherController";
import { UpdatePublisherController } from "../controllers/publishers/UpdatePublisherController";
import { DeletePublisherController } from "../controllers/publishers/DeletePublisherController";
import { FindPublisherByIdController } from "../controllers/publishers/FindPublisherByIdController";
import { FindAllPublishersController } from "../controllers/publishers/FindAllPublishersController";

const publisherRoutes = Router();

const createPublisherController = new CreatePublisherController();
const updatePublisherController = new UpdatePublisherController();
const deletePublisherController = new DeletePublisherController();
const findPublisherByIdController = new FindPublisherByIdController();
const findAllPublishersController = new FindAllPublishersController();

publisherRoutes.post("/", createPublisherController.handle);
publisherRoutes.put("/:id", updatePublisherController.handle);
publisherRoutes.delete("/:id", deletePublisherController.handle);
publisherRoutes.get("/:id", findPublisherByIdController.handle);
publisherRoutes.get("/", findAllPublishersController.handle);

export { publisherRoutes }