import { Router } from "express";
import homeRouter from "./homeRouter";
import authRouter from "./authRouter";

const router = Router();
router.use(homeRouter);
router.use(authRouter);

export default router;
