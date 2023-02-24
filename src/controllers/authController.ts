import { Request, Response } from "express";
import { adminLoginSchema, adminSignUpSchema } from "../schemas/authSchema";
import * as manipulateToken from "../utils/manipulateToken";

export async function createAdmin(req: Request, res: Response) {
	const { name, email, password } = req.body;
	const { error } = adminSignUpSchema.validate({ name, email, password });
    if (error) throw {type: , message: error.message};
	return res.status(201).send("Created");
}
