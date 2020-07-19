export class BaseException {
    
    public Message: string;
    
    constructor(mensagem: string) {
        this.Message =  mensagem;
    }
}