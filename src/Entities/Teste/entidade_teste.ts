import { setFlagsFromString } from "v8";

export class EntidadeTeste1 {

    public nome: string | undefined;
    public idade: number | undefined;

    constructor(args:{
        nome: string,
        idade: number
    }) {
        this.nome = args.nome,
        this.idade = args.idade
    }
}

export class EntidadeTeste2 {

    public nome: string | undefined;
    public idade: number | undefined;

    constructor() {}
}