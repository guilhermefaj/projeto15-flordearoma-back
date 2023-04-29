import { Router } from "express";
import { getCategory, updateStock } from "../controllers/category.controller.js";
import { productSchema, updateStockSchema } from "../schemas/category.chemas.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { getUserCategory } from "../controllers/category.controller.js";




const categoryRouter = Router();

categoryRouter.get("/products", getUserCategory)


categoryRouter.post("/products", validateSchema(productSchema), getCategory);

categoryRouter.put("/products", validateSchema(updateStockSchema), updateStock);


export default categoryRouter