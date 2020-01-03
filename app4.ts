// import { ConcessionariaDAO } from './ConcessionariaDAO';
import { Concessionaria } from './Concessionaria'
// import { PessoaDAO } from './PessoaDAO';
import { Pessoa } from './Pessoa';
import { DAO } from './DAO';

// let dao: ConcessionariaDAO = new ConcessionariaDAO()
let concessionaria = new Concessionaria('', [])

// let dao2: PessoaDAO = new PessoaDAO()
let pessoa: Pessoa = new Pessoa('', '');

let dao3: DAO<Concessionaria> = new DAO<Concessionaria>()
dao3.inserir(concessionaria)