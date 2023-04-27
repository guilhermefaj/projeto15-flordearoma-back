import { Router } from "express";
import { getItems } from "../controllers/item.controller.js";

const itemRouter = Router()

itemRouter.get("/:categories/:itemId", getItems);

export default itemRouter;