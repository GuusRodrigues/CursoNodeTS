console.log ("Olá, Mundo!");

//cria array
let cursos : string [] = [];

//Add no array
cursos.push ("ADS");
cursos.push ("Biologia");
cursos.push ("Bioinfo");

//tira o último
cursos.pop()

//tira o primeiro
cursos.shift();

//para imprimir dar 'npm run dev'
console.log("Cursos registrados: ", cursos);


//Objeto ts
const carro: { tipo: string, modelo: string, ano: number} = {
    tipo: "Hatchback",
    modelo: "Fiat",
    ano: 2021,
};

//imprimir objeto
console.log ("Carro: ", carro);

//imprimir array usando table
console.table(carro);

enum DiasdaSemana {
    Domingo = 1,
    Segunda = 2,
    Terca = "Terça-feira",
}

console.log (DiasdaSemana.Terca);

interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle : ColoredRectangle = {
    height: 20,
    width: 15,
    color: "Verde",
}


class Genero {  //Cria um tipo
    private nome: string; //private para não ser acessado diretamente

    constructor (nome: string) { // cria e inicializa um um objeto criado a partir de uma classe.
        this.nome = nome;
    }
}
   
let genero1: Genero = new Genero( "suspense"); //cria uma variavel do tipo genero e recebe um valor 

                    //new cria um objeto genero com o valor de "suspense"

console.table(genero1); 
        

class Filme {
    private titulo: string;
    private duracao: number;
    private preco: number;
    private genero: Genero; //relacionamento entre as classes
    

    constructor(titulo: string, duracao: number,preco: number, genero: Genero) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.preco = preco;
        this.genero = genero;
    }
}

let filme1: Filme = new Filme("Matrix", 150, 15, genero1);
console.table(filme1);