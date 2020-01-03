"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("./Veiculo");
var MotoDAO = /** @class */ (function () {
    function MotoDAO() {
        this.nomeTabela = 'tb_veiculo';
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
        return new Veiculo_1.Veiculo();
    };
    MotoDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Veiculo_1.Veiculo();
    };
    MotoDAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Veiculo_1.Veiculo()];
    };
    return MotoDAO;
}());
exports.MotoDAO = MotoDAO;
