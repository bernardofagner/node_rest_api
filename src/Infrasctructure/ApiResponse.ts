import { ResultState } from "./ResultState";

export abstract class ApiResponse {
    commandState: ResultState | undefined;
}