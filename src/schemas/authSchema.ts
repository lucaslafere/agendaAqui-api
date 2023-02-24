import joi from "joi";
import { AdminLoginData, iAdminSignUp } from "../types/authType.js";
export const adminSignUpSchema = joi.object<iAdminSignUp>({
	email: joi
		.string()
		.email({ tlds: { allow: false } })
		.trim()
		.required(),
	password: joi.string().trim().required().min(6).max(20),
	confirmPassword: joi.string().trim().required().valid(joi.ref("password")),
	name: joi.string().trim().required().min(3).max(20),
});

export const adminLoginSchema = joi.object<AdminLoginData>({
	email: joi
		.string()
		.email({ tlds: { allow: false } })
		.trim()
		.required(),
	password: joi.string().trim().required(),
});
