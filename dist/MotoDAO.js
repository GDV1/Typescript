"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = require("./Moto");
var MotoDAO = /** @class */ (function () {
    function MotoDAO() {
        this.nomeTabela = 'tb_moto';
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
        return new Moto_1.Moto();
    };
    MotoDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Moto_1.Moto();
    };
    MotoDAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Moto_1.Moto()];
    };
    return MotoDAO;
}());
exports.MotoDAO = MotoDAO;
