import { GenericRepository } from "../../Repositories/Parse/ParseRepository";

export class ListAllEventsCommand {

    private eventsRepository: GenericRepository;

    constructor(eventsRepository: GenericRepository) {
        this.eventsRepository = eventsRepository;
    }
    
    public async ExecuteAsync(): Promise<any> {

        let result = await this.eventsRepository.listAllEvents();
        return result;
    }
}