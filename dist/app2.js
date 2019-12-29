"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.modelo = '';
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    // Recupera a velocidade do objeto e a modifica
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    // Recupera a velocidade do objeto e a modifica 
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    // Recupera a velocidade do objeto
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = '';
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = '';
        this.carroPreferido = '';
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/** Criar carros */
var carroA = new Carro('Amarok', 4);
var carroB = new Carro('S10', 4);
var carroC = new Carro('Corolla', 4);
/** Montar lista de carros da concessionária */
var listaDeCarros = [carroA, carroB, carroC];
var concessionária = new Concessionaria('Avenida Paulista', listaDeCarros);
/** Exibir a lista de carros */
// console.log(concessionária.mostrarListaDeCarros())
/** Criar um cliente para comprar um carro */
var pessoaA = new Pessoa('Gabriel', 'S10');
var pessoaB = new Pessoa('Bruna', 'Up!');
concessionária.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == pessoaA.dizerCarroPreferido()) {
        //compra o carro
        pessoaA.comprarCarro(carro);
    }
});
console.log(pessoaA.dizerCarroQueTem());
