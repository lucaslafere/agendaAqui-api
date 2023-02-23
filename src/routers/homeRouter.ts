import { Router } from "express";
import * as homeController from "../controllers/homeController";

const homeRouter = Router();

homeRouter.get("/", homeController.getHomePage);

export default homeRouter;
