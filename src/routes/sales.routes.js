import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { authValidation } from "../middlewares/auth.middleware.js";
import { saleSchema } from "../schemas/sales.schemas.js";
import { checkout } from "../controllers/sale.controller.js";

const salesRouter = Router();

salesRouter.use(authValidation);

salesRouter.post("/sales", validateSchema(saleSchema), checkout);

export default salesRouter;