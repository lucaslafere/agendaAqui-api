import { admins } from "@prisma/client";

export type AdminSignUpData = Omit<admins, "id" | "createdAt" | "updatedAt">;

export type AdminLoginData = Pick<admins, "email" | "password">;
