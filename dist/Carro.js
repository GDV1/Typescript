"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Carro = Carro;
