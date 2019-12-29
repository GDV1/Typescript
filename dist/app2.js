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
var carroA = new Carro('S10', 4);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
carroA.acelerar();
console.log(carroA);
