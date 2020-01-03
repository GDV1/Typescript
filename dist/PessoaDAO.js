"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('Lógica de delete');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Pessoa_1.Pessoa('', '')];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
