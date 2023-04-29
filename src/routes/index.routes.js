import { Router } from "express";
import usersRouter from "./users.routes.js";
import itemRouter from "./item.routes.js";
import categoryRouter from "./category.routes.js";
import recommendationsRouter from "./recommendations.routes.js";
import salesRouter from "./sales.routes.js";


const router = Router();
router.use(usersRouter);
router.use(itemRouter);
router.use(categoryRouter);
router.use(recommendationsRouter);
router.use(salesRouter);

export default router;