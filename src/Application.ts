import { Server } from "./Config/Servidor/Server";
import { SystemController } from "./Controllers/SystemController";
import { ApplicationRouter } from "./Routes/ApplicationRouter";
import { UsersController } from "./Controllers/UsersController";
import { GenericController } from "./Controllers/GenericController";

class Application {

    //#region Propriedades
    private instanciaServidor: Server;
    private app: any;
    private ApplicationRouter: ApplicationRouter;
    //#endregion

    //#region Construtor
    public constructor(servidor: Server) {
        this.instanciaServidor = servidor;
        this.app = this.instanciaServidor.createApp();
        this.app.use(this.instanciaServidor.configureJsonRequestsAndResponses());
        this.app.use(this.instanciaServidor.configureCorsPolicy());
        this.ApplicationRouter = new ApplicationRouter(
            new SystemController(),
            new UsersController(),
            new GenericController()
        );

        this.app.use('/', this.ApplicationRouter.getSystemControllerRoutes());
        this.app.use('/', this.ApplicationRouter.getUsersControllerRoutes());
        this.app.use('/', this.ApplicationRouter.getEventsControllerRoutes());
    }
    //#endregion

    //#region Inicializacao
    public iniciarAplicacao() {
        let porta = process.env.PORT || 3000;
        this.app.listen(porta, () => {
            console.log("Servidor iniciado em: http://localhost:" + porta);
        });
    }
    //#endregion
}

//Instancia a aplicação
new Application(new Server()).iniciarAplicacao();
