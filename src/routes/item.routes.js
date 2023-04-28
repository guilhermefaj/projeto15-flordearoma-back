import { Router } from "express";
import { getItems, getRecommendations } from "../controllers/item.controller.js";

const itemRouter = Router()

itemRouter.get("/:categories/:itemId", getItems);
itemRouter.get("/:categories/:itemId", getRecommendations);

export default itemRouter;