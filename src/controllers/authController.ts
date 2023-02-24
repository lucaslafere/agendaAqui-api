import { Request, Response } from "express";
import * as manipulateToken from "../utils/manipulateToken";

export async function createAdmin(req: Request, res: Response) {
	const { name, email, password } = req.body;
}
