import { customerValidation } from "@domain/validation/CustomerValidation";
import { idValidation } from "@domain/validation/idValidation";
import { Router } from "express";
import { CreateCustomerController } from "../controllers/users/CreateCustomerController";
import { DeleteCustomerController } from "../controllers/users/DeleteCustomerController";
import { UpdateCustomerController } from "../controllers/users/UpdateCustomerController";
import { validationHandler } from "../middlewares/validationHandler";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();

customersRoutes.post(
    "/",
    validationHandler(customerValidation),
    createCustomerController.handle
);
customersRoutes.put("/:id", validationHandler([...idValidation, ...customerValidation]), updateCustomerController.handle);
customersRoutes.delete("/:id", validationHandler(idValidation), deleteCustomerController.handle);

export { customersRoutes }