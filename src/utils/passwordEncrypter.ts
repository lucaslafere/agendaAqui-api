import { compareSync, hashSync } from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const salt = Number(process.env.PASSWORD_SALT);

export function hashedPassword(password: string) {
	return hashSync(password, salt);
}

export function comparePassword(
	password: string,
	encryptedPassword: string
): boolean {
	return compareSync(password, encryptedPassword);
}
