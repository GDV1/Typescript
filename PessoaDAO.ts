import { DaoInterface } from './DaoInterface';
import { Pessoa } from './Pessoa'

export class PessoaDAO implements DaoInterface {
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('Lógica de insert')
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('Lógica de update')
        return true
    }
    remover(id: number): Pessoa {
        console.log('Lógica de delete')
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa {
        console.log('Lógica de select')
        return new Pessoa('', '')
    }
    selecionarTodos(): [any] {
        console.log('Lógica getAll')
        return [new Pessoa('', '')]
    }
}