import { customerValidation } from "@domain/validation/CustomerValidation";
import { Router } from "express";
import { CreateCustomerController } from "../controllers/users/CreateCustomerController";
import { validationHandler } from "../middlewares/validationHandler";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();

customersRoutes.post("/", validationHandler(customerValidation), createCustomerController.handle);

export { customersRoutes }