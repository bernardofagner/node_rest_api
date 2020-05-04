import { Request } from "express";
import { ApiRequest } from "../../Infrasctructure/ApiRequest";

export class ListAllEventsRequest extends ApiRequest {
    
    public request: Request | undefined
    public name: string | undefined;

    constructor(request: Request) {
        super();
        this.name = request.body.name;
    }
}