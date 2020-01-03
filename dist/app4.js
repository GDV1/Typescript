"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ConcessionariaDAO } from './ConcessionariaDAO';
var Concessionaria_1 = require("./Concessionaria");
// import { PessoaDAO } from './PessoaDAO';
var Pessoa_1 = require("./Pessoa");
var DAO_1 = require("./DAO");
// let dao: ConcessionariaDAO = new ConcessionariaDAO()
var concessionaria = new Concessionaria_1.Concessionaria('', []);
// let dao2: PessoaDAO = new PessoaDAO()
var pessoa = new Pessoa_1.Pessoa('', '');
var dao3 = new DAO_1.DAO();
dao3.inserir(concessionaria);
