"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var MotoDAO = /** @class */ (function () {
    function MotoDAO() {
        this.nomeTabela = 'tb_carro';
    }
    MotoDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    MotoDAO.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    MotoDAO.prototype.remover = function (id) {
        console.log('Lógica de delete');
        return new Carro_1.Carro('', 0);
    };
    MotoDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Carro_1.Carro('', 0);
    };
    MotoDAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Carro_1.Carro('', 0)];
    };
    return MotoDAO;
}());
exports.MotoDAO = MotoDAO;
