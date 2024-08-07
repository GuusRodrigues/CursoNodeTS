"use strict";
console.log("Olá, Mundo!");
//cria array
let cursos = [];
//Add no array
cursos.push("ADS");
cursos.push("Biologia");
cursos.push("Bioinfo");
//tira o último
cursos.pop();
//tira o primeiro
cursos.shift();
//para imprimir dar 'npm run dev'
console.log("Cursos registrados: ", cursos);
//Objeto ts
const carro = {
    tipo: "Hatchback",
    modelo: "Fiat",
    ano: 2021,
};
//imprimir objeto
console.log("Carro: ", carro);
//imprimir array usando table
console.table(carro);
var DiasdaSemana;
(function (DiasdaSemana) {
    DiasdaSemana[DiasdaSemana["Domingo"] = 1] = "Domingo";
    DiasdaSemana[DiasdaSemana["Segunda"] = 2] = "Segunda";
    DiasdaSemana["Terca"] = "Ter\u00E7a-feira";
})(DiasdaSemana || (DiasdaSemana = {}));
console.log(DiasdaSemana.Terca);
