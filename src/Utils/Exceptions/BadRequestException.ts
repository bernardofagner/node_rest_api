import { BaseException } from "./BaseException";

export class BadRequestException extends BaseException {

    public StatusCode: number;

    constructor(message: string) {
        super(message);
        this.StatusCode = 400;
    }
}