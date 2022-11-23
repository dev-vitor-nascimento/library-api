import { Router } from "express";
import { customerValidation } from "@domain/validation/CustomerValidation";
import { idValidation } from "@domain/validation/idValidation";
import { CreateCustomerController } from "../controllers/users/CreateCustomerController";
import { DeleteCustomerController } from "../controllers/users/DeleteCustomerController";
import { FindCustomerByIdController } from "../controllers/users/FindCustomerByIdController";
import { UpdateCustomerController } from "../controllers/users/UpdateCustomerController";
import { validationHandler } from "../middlewares/validationHandler";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const findCustomerByIdController = new FindCustomerByIdController();

customersRoutes.post("/", validationHandler(customerValidation), createCustomerController.handle);
customersRoutes.put("/:id", validationHandler([...idValidation, ...customerValidation]), updateCustomerController.handle);
customersRoutes.delete("/:id", validationHandler(idValidation), deleteCustomerController.handle);
customersRoutes.get("/:id", validationHandler(idValidation), findCustomerByIdController.handle);

export { customersRoutes }