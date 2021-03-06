import { DaoInterface } from './DaoInterface';
import { Concessionaria } from './Concessionaria'

export class ConcessionariaDAO implements DaoInterface<Concessionaria> {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('Lógica de insert')
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('Lógica de update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('Lógica de delete')
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria {
        console.log('Lógica de select')
        return new Concessionaria('', [])
    }
    selecionarTodos(): [any] {
        console.log('Lógica getAll')
        return [new Concessionaria('', [])]
    }
}