import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";

dotenv.config();

const secret: string = process.env.MY_SECRET_KEY;

export function generateToken(data: any) {
	return jwt.sign(data, secret);
}

export function decryptToken(token: string) {
	return jwt.verify(token, secret);
}
