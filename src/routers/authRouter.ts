import { Router } from "express";
import * as authController from "../controllers/authController";

const authRouter = Router();

// the register route should be protected by an admin or token middleware, so that only admins can register new admins
authRouter.post("/register", authController.registerAdmin);

authRouter.post("/login", authController.loginAdmin);

export default authRouter;
