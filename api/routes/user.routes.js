import {Router} from "express"
import { Test } from "../controllers/User.controller.js";

const userRouter = Router();

userRouter.get("/test", Test)

export default userRouter;