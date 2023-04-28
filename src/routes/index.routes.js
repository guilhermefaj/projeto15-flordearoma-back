import { Router } from "express";
import usersRouter from "./users.routes.js";
import itemRouter from "./item.routes.js";
import categoryRouter from "./category.routes.js";
import recommendationsRouter from "./recommendations.routes.js";


const router = Router();
router.use(usersRouter);
router.use(itemRouter);
router.use(categoryRouter)
router.use(recommendationsRouter)

export default router;