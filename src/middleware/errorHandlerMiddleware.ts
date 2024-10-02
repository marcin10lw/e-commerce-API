import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "../errors";
import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: CustomApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError = {
    status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };
  res.status(customError.status).json({ msg: customError.msg });
};
