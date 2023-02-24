import { Router } from "express";
import * as authController from "../controllers/authController";

const authRouter = Router();

authRouter.post("/register", authController.registerAdmin);
authRouter.post("/login", authController.loginAdmin);

export default authRouter;
