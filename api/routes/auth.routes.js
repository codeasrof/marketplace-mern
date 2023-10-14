import {Router} from "express"
import { Signup } from "../controllers/Auth.controller.js"

const authRouter = Router();

authRouter.post("/signup", Signup)


export default authRouter;