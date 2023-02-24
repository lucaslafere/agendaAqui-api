import { admins } from "@prisma/client";

type AdminRegisterData = Pick<admins, "email" | "password" | "name">;
export interface iAdminRegister extends AdminRegisterData {
	confirmPassword: string;
}

export type AdminLoginData = Pick<admins, "email" | "password">;
