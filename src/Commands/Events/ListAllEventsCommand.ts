import { IListAllEventsCommand } from "../../Suport/Interfaces/Commands/IListAllEventsCommand";
import { GenericRepository } from "../../Repositories/Parse/GenericRepository";
import { ListAllEventsResponse } from "../../Suport/RequestResponse/ListAllEventsResponse";
import { ListAllEventsRequest } from "../../Suport/RequestResponse/ListAllEventsRequest";
import { ResultState } from "../../Infrasctructure/ResultState";

export class ListAllEventsCommand implements IListAllEventsCommand {

    private eventsRepository: GenericRepository;

    constructor(eventsRepository: GenericRepository) {
        this.eventsRepository = eventsRepository;
    }
    
    public async ExecuteAsync(request: ListAllEventsRequest): Promise<ListAllEventsResponse> {

        let parseResult = new ListAllEventsResponse();
        parseResult.eventos = await this.eventsRepository.listAllMockedInformations();
        parseResult.commandState = ResultState.Success;
        return parseResult;
    }
}