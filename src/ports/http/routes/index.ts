import { Router } from "express";
import { customersRoutes } from "./customers.routes";
import { publisherRoutes } from "./publishers.routes";

const router = Router();

router.use("/customers", customersRoutes);
router.use("/publishers", publisherRoutes);

export { router }