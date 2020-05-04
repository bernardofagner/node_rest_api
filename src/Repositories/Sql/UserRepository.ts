/**
 * A repository to handle every user associated data, like strong entity and it's weak entityes
 */
import { SqlBaseRepository } from "./Configuration/SqlBaseRepository";

export class UserRepository extends SqlBaseRepository {

    constructor() {
        super();
    }

    public async getAll(): Promise<any> {

        const queryString = `
            SELECT
                document as Document,
                firstname AS Firstname,
                lastname AS Lastname,
                biografy AS Biografy
            FROM sd_users as u
            ORDER BY u.firstname
        `;
        
        return this.database.query(queryString, {
            type: "SELECT" 
        });
    }

    public async getByKey(key: string): Promise<any> {

        const queryString = `
        SELECT
            document as Document,
            firstname AS Firstname,
            lastname AS Lastname,
            biografy AS Biografy
            FROM sd_users
            WHERE nome = :nome
            AND cpf = :cpf
        `;
        
        const result = await this.database.query(queryString, {
            replacements: { cpf: key },
            type: "SELECT" 
        });

        console.log("usuario", result);
        return result;
    }

    public async getByAny(key: string): Promise<any> {

        /*TODO: Implement the correct code */
        const parametroNome: string = "fagner de Oliveira Bernardo";
        const parametroId: string = "f7f38ceb-8fa3-40e3-b713-c4e3f0749081";
        const queryString = `
            SELECT
                firstname AS Name,
                lastname AS Lastname,
                byografy AS Biografy
            FROM sd_users
            WHERE nome = :nome
            AND id = :id
        `;
        
        const result = await this.database.query(queryString, {
            replacements: { nome: parametroNome, id: parametroId },
            type: "SELECT" 
        });

        console.log("usuario", result);
        return result;
    }
}