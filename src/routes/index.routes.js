import { Router } from "express";
import usersRouter from "./users.routes.js";
import itemRouter from "./item.routes.js";
import recommendationsRouter from "./recommendations.routes.js";

const router = Router();
router.use(usersRouter);
router.use(itemRouter);
router.use(recommendationsRouter)

export default router;