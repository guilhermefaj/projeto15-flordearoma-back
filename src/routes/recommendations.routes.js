import { Router } from "express";
import { getRecommendations } from "../controllers/recommendations.controller.js";

const recommendationsRouter = Router()

recommendationsRouter.get("/:categories", getRecommendations);

export default recommendationsRouter;

