import { Response } from 'express';
import { HttpStatusCode } from '../errors/httpStatusCodes';
import BaseError from '../errors/baseError';

export default class BaseController {

    protected respond(data: any, res: Response): void {
        if (data instanceof BaseError) res.status(data.httpCode).json(data.message);
        else res.status(data.httpCode | HttpStatusCode.OK).json(data);
    }
}