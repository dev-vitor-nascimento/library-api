import { Router } from "express";
import { CreateCustomerController } from "../controllers/customers/CreateCustomerController";
import { DeleteCustomerController } from "../controllers/customers/DeleteCustomerController";
import { FindAllCustomersController } from "../controllers/customers/FindAllCustomersController";
import { FindCustomerByIdController } from "../controllers/customers/FindCustomerByIdController";
import { UpdateCustomerController } from "../controllers/customers/UpdateCustomerController";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const findCustomerByIdController = new FindCustomerByIdController();
const findAllCustomersController = new FindAllCustomersController();

customersRoutes.post("/", createCustomerController.handle);
customersRoutes.put("/:id", updateCustomerController.handle);
customersRoutes.delete("/:id", deleteCustomerController.handle);
customersRoutes.get("/:id", findCustomerByIdController.handle);
customersRoutes.get("/", findAllCustomersController.handle);

export { customersRoutes }