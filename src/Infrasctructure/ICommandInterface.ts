import { ApiRequest } from "./ApiRequest";
import { ApiResponse } from "./ApiResponse";

/*Interface para ser usada quando o Command não for assincrono */
export interface ICommand extends ApiRequest {
    Execute(request: ApiRequest): ApiResponse;
}

/*Interface para ser usada quando o Command não for assincrono */
export interface ICommandAsync {
    ExecuteAsync(request: ApiRequest): Promise<ApiResponse>
}