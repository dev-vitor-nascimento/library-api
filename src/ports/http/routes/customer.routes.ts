import { customerValidation } from "@domain/validation/CustomerValidation";
import { idValidation } from "@domain/validation/idValidation";
import { Router } from "express";
import { CreateCustomerController } from "../controllers/users/CreateCustomerController";
import { UpdateCustomerController } from "../controllers/users/UpdateCustomerController";
import { validationHandler } from "../middlewares/validationHandler";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();

customersRoutes.post("/", validationHandler(customerValidation), createCustomerController.handle);
customersRoutes.put("/:id", validationHandler([...idValidation, ...customerValidation]), updateCustomerController.handle);

export { customersRoutes }