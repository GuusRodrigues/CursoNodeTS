import { AppDataSource } from "../db/data-source";
import { Genero } from "../models/genero";

class GeneroRepository {
    generoRepository = AppDataSource.getRepository(Genero); //Definição de classe

    //método save para criar um novo genero (inset do repositório)
    async save(genero: Genero): Promise<Genero> {
        try {
            this.generoRepository.save(genero);
            return genero;
        } catch (err) {
            throw new Error("Falha ao criar o gênero!");
        }
    }    

    //método find para buscar (select do repositório)
    async retrieveAll(): Promise<Array<Genero>> { //trás todos os generos
        try {
            return this.generoRepository.find();
        } catch (error) {
            throw new Error("Falha ao retornar os gêneros!");
        }
    }

    async retrieveById(generoId: number): Promise<Genero | null> {
        try {
            return this.generoRepository.findOneBy({
                idGenero: generoId,
            });
        } catch (error) {
            throw new Error("Falha ao buscar o gênero!");
        }
    }

    async retrieveByNome(n: string): Promise<Genero | null> {
        try {
            return this.generoRepository.findOneBy({
                nome: n,
            });
        } catch (error) {
            throw new Error("Falha ao buscar o gênero!");
        }
    }

    //método update para atualizar
    //Verifica a existencia do genero pelo idGenero, se existir, ele atualiza, se não, ele dá erro
    async update(genero: Genero) { 
        const { idGenero, nome } = genero; //cria um objeto genero
        try {
            this.generoRepository.save(genero); //Salvando o novo genero no repositório
        } catch (error) {
            throw new Error("Falha ao atualizar o gênero!");
        }
    }

    //método delete para deletar
    //Verifica a existencia do genero pelo idGenero, se existir, ele deleta, se não, ele dá erro  (delete do repositório)
    async delete(generoId: number): Promise<number> {
        try {
            const generoEncontrado = await this.generoRepository.findOneBy({
                idGenero: generoId,
            });
            //Cria uma resposta visual
            if (generoEncontrado) {
                this.generoRepository.remove(generoEncontrado);
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o gênero!");
        }
    }

    //método deleteAll para deletar todos 
    async deleteAll(): Promise<number> {
        try {
            let num = this.generoRepository.query("select count(idGenero) from genero;");
            this.generoRepository.query("delete from genero;");
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os gêneros!");
        }
    }

}
    
export default new GeneroRepository();
