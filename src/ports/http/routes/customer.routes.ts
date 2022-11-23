import { Router } from "express";
import { customerValidation } from "@domain/validation/CustomerValidation";
import { idValidation } from "@domain/validation/idValidation";
import { CreateCustomerController } from "../controllers/customers/CreateCustomerController";
import { DeleteCustomerController } from "../controllers/customers/DeleteCustomerController";
import { FindAllCustomersController } from "../controllers/customers/FindAllCustomersController";
import { FindCustomerByIdController } from "../controllers/customers/FindCustomerByIdController";
import { UpdateCustomerController } from "../controllers/customers/UpdateCustomerController";
import { validationHandler } from "../middlewares/validationHandler";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const findCustomerByIdController = new FindCustomerByIdController();
const findAllCustomersController = new FindAllCustomersController();

customersRoutes.post("/", validationHandler(customerValidation), createCustomerController.handle);
customersRoutes.put("/:id", validationHandler([...idValidation, ...customerValidation]), updateCustomerController.handle);
customersRoutes.delete("/:id", validationHandler(idValidation), deleteCustomerController.handle);
customersRoutes.get("/:id", validationHandler(idValidation), findCustomerByIdController.handle);
customersRoutes.get("/", findAllCustomersController.handle);

export { customersRoutes }