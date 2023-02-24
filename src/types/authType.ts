import { admins } from "@prisma/client";

type AdminSignUpData = Pick<admins, "email" | "password" | "name">;
export interface iAdminSignUp extends AdminSignUpData {
	confirmPassword: string;
}

export type AdminLoginData = Pick<admins, "email" | "password">;
