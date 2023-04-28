import { Router } from "express";
import usersRouter from "./users.routes.js";
import itemRouter from "./item.routes.js";
import categoryRouter from "./category.routes.js";

const router = Router();
router.use(usersRouter);
router.use(itemRouter);
router.use(categoryRouter)
export default router;