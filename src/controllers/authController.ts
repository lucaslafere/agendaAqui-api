import { Request, Response } from "express";
import { adminLoginSchema, adminRegisterSchema } from "../schemas/authSchema";
import * as manipulateToken from "../utils/manipulateToken";

export async function registerAdmin(req: Request, res: Response) {
	const { name, email, password, confirmPassword } = req.body;
	const { error } = adminRegisterSchema.validate({
		name,
		email,
		password,
		confirmPassword,
	});
	if (error) throw { type: "wrong-body-format", message: error.message };
	return res.status(201).send("Registered");
}
export async function loginAdmin(req: Request, res: Response) {
	const { email, password } = req.body;
	const { error } = adminLoginSchema.validate({ email, password });
	if (error) throw { type: "wrong-body-format", message: error.message };
	const token = manipulateToken.generateToken({ email, password });
	return res.status(200).send({ message: "Logged in", token });
}
