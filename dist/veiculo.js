"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.modelo = '';
        this.velocidade = 0;
    }
    // Recupera a velocidade do objeto e a modifica
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    // Recupera a velocidade do objeto e a modifica 
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    // Recupera a velocidade do objeto
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
