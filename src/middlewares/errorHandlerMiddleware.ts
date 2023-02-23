import { Request, Response } from "express";

interface iError {
	type: ErrorCode;
	message: string;
}
enum ErrorCode {
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
	if (err.type === ErrorCode.BAD_REQUEST) {
		return res.status(ErrorCode.BAD_REQUEST).send(err.message);
	}
	if (err.type === ErrorCode.UNAUTHORIZED) {
		return res.status(ErrorCode.UNAUTHORIZED).send(err.message);
	}
	if (err.type === ErrorCode.NOT_FOUND) {
		return res.status(ErrorCode.NOT_FOUND).send(err.message);
	}
	if (err.type === ErrorCode.CONFLICT) {
		return res.status(ErrorCode.CONFLICT).send(err.message);
	}
	if (err.type === ErrorCode.UNPROCESSABLE) {
		return res.status(ErrorCode.UNPROCESSABLE).send(err.message);
	}
	return res.status(ErrorCode.INTERNAL_SERVER_ERROR).send(err.message);
}
