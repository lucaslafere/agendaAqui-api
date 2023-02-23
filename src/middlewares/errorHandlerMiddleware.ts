import { Request, Response } from "express";

interface iError {
	type: ErrorCode;
	message: string;
}
export enum ErrorCode {
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	NOT_FOUND = 404,
	CONFLICT = 409,
	UNPROCESSABLE = 422,
	INTERNAL_SERVER_ERROR = 500,
}

export default function errorHandlerMiddleware(
	err: iError,
	req: Request,
	res: Response
) {
	console.log(err);
	return res
		.status(err.type || 500)
		.send(err.message || "Internal Server Error");
}
