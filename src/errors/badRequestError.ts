import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "./customApiError";

export class BadRequestError extends CustomApiError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
