import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "./customApiError";

export class NotFoundError extends CustomApiError {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}
