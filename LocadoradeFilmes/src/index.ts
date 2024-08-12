import { AppDataSource } from "./db/data-source";
import { Genero } from "./models/genero";
import generoRepository from "./repositories/genero.repository";

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log(`Database is running.`);
    })
    .catch((error) => console.log(error))


    

    

