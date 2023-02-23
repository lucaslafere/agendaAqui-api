import { Request, Response } from "express";

export async function getHomePage(req: Request, res: Response) {
	return res.status(200).send("getCalendar response");
}
