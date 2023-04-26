import { Router } from "express";
import { signIn, signUp } from "../controllers/user.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { userLoginSchema, userSchema } from "../schemas/users.schemas.js";

const usersRouter = Router();

usersRouter.post("/sign-up", validateSchema(userSchema), signUp);

usersRouter.post("/sign-in", validateSchema(userLoginSchema), signIn);

export default usersRouter;