import { SystemController } from "../Controllers/SystemController"
import { Router } from "express"
import { UsersController } from "../Controllers/UsersController";
import { GenericController } from "../Controllers/GenericController";

export class ApplicationRouter {

    //#region Propriedades
    private systemControllerRouter = Router();
    private usersControllerRouter = Router();
    private eventsControllerRouter = Router();
    //#endregion

    //#region Construtor
    constructor(private indexController: SystemController, private usersController: UsersController,
        private eventsController: GenericController) {
        this.setSystemControllerRoutes();
        this.setUsersControllerRoutes();
        this.setEventsControllerRoutes();
    }
    //#endregion

    //#region Set routes
    private setSystemControllerRoutes(): void {
        this.systemControllerRouter.get('/', this.indexController.index);
    }

    private setUsersControllerRoutes(): void {
        this.usersControllerRouter.get('/api/v1/users', this.usersController.getAllusers);
    }

    private setEventsControllerRoutes(): void {
        this.eventsControllerRouter.get('/api/v1/genericInformation', this.eventsController.listAllEvents)
    }
    //#endregion

    //#region Get Routes
    public getSystemControllerRoutes(): Router {
        return this.systemControllerRouter;
    }

    public getUsersControllerRoutes(): Router {
        return this.usersControllerRouter;
    }

    public getEventsControllerRoutes(): Router {
        return this.eventsControllerRouter;
    }
    //#endregion
}