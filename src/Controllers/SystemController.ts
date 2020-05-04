import { Request, Response } from 'express';
import status from "http-status-codes";

export class SystemController {

    //#region
    constructor() { }
    //#endregion

    //#region Métodos públicos
    public index(request: Request, response: Response): any {

        const result = {
            mensagem: 'REST API',
            version: '0.1'
        }

        try {
            response.status(status.OK).json(result);
        }
        catch (Exception) {
            response.status(status.INTERNAL_SERVER_ERROR).json(result);
        }
    }
    //#endregion
}