"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = '';
    }
    DAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    DAO.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    DAO.prototype.remover = function (id) {
        console.log('Lógica de delete');
        return Object();
    };
    DAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return Object();
    };
    DAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
