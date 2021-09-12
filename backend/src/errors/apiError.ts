import BaseError from "./baseError";
import { HttpStatusCode } from "./httpStatusCodes";

class APIError extends BaseError {
    constructor(name: string, httpCode = HttpStatusCode.INTERNAL_SERVER, description = 'internal server error', isOperational: boolean = true) {
      super(name, httpCode, description, isOperational);
    }
   }