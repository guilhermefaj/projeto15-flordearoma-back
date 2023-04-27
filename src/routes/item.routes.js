import { Router } from "express";
import { getItems } from "../controllers/item.controller";

const itemRouter = Router()

usersRouter.post("/:categories/:itemId", getItems);

export default itemRouter;