import { NextFunction, Request, Response } from "express";

type ErrorCode =
	| "not-found"
	| "conflict"
	| "unprocessable"
	| "generic"
	| "unauthorized"
	| "wrong-body-format";
interface iError {
	type: ErrorCode;
	message: string;
}

enum HttpStatusCode {
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
	res: Response,
	_next: NextFunction
) {
	console.log(err);
	if (err.type === "not-found") {
		return res.status(HttpStatusCode.NOT_FOUND).send(err.message);
	}
	if (err.type === "conflict") {
		return res.status(HttpStatusCode.CONFLICT).send(err.message);
	}
	if (err.type === "unprocessable") {
		return res.status(HttpStatusCode.UNPROCESSABLE).send(err.message);
	}
	if (err.type === "generic") {
		return res.status(HttpStatusCode.BAD_REQUEST).send(err.message);
	}
	if (err.type === "unauthorized") {
		return res.status(HttpStatusCode.UNAUTHORIZED).send(err.message);
	}
	if (err.type === "wrong-body-format") {
		return res.status(HttpStatusCode.UNPROCESSABLE).send(err.message);
	}
	return res
		.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
		.send("Internal Server Error");
}
