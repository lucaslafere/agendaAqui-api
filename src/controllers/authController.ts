import { Request, Response } from "express";
import { ErrorCode } from "../middlewares/errorHandlerMiddleware";
import { adminLoginSchema, adminSignUpSchema } from "../schemas/authSchema";
import * as manipulateToken from "../utils/manipulateToken";

export async function createAdmin(req: Request, res: Response) {
	const { name, email, password } = req.body;
	const { error } = adminSignUpSchema.validate({ name, email, password });
	if (error) throw { type: ErrorCode.UNPROCESSABLE, message: error.message };
	return res.status(201).send("Created");
}
export async function loginAdmin(req: Request, res: Response) {
	const { email, password } = req.body;
	const { error } = adminLoginSchema.validate({ email, password });
	if (error) throw { type: ErrorCode.UNPROCESSABLE, message: error.message };
	const token = manipulateToken.generateToken({ email, password });
	return res.status(200).send({ message: "Logged in", token });
}
