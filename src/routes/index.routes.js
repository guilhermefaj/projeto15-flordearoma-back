import { Router } from "express";
import usersRouter from "./users.routes.js";
import itemRouter from "./item.routes.js";

const router = Router();
router.use(usersRouter);
router.use(itemRouter);

export default router;