"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
/** Criar carros */
var carroA = new Carro_1.Carro('Amarok', 4);
var carroB = new Carro_1.Carro('S10', 4);
var carroC = new Carro_1.Carro('Corolla', 4);
/** Montar lista de carros da concessionária */
var listaDeCarros = [carroA, carroB, carroC];
var concessionária = new Concessionaria_1.Concessionaria('Avenida Paulista', listaDeCarros);
/** Exibir a lista de carros */
// console.log(concessionária.mostrarListaDeCarros())
/** Criar um cliente para comprar um carro */
var pessoaA = new Pessoa_1.Pessoa('Gabriel', 'S10');
var pessoaB = new Pessoa_1.Pessoa('Bruna', 'Up!');
concessionária.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == pessoaA.dizerCarroPreferido()) {
        //compra o carro
        pessoaA.comprarCarro(carro);
    }
});
console.log(pessoaA.dizerCarroQueTem());
