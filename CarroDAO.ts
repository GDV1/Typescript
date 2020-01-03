import { DaoInterface } from './DaoInterface';
import { Carro } from './Carro'

export class MotoDAO implements DaoInterface<Carro> {
    nomeTabela: string = 'tb_carro'

    inserir(object: Carro): boolean {
        console.log('Lógica de insert')
        return true
    }
    atualizar(object: Carro): boolean {
        console.log('Lógica de update')
        return true
    }
    remover(id: number): Carro {
        console.log('Lógica de delete')
        return new Carro('', 0)
    }
    selecionar(id: number): Carro {
        console.log('Lógica de select')
        return new Carro('', 0)
    }
    selecionarTodos(): [any] {
        console.log('Lógica getAll')
        return [new Carro('', 0)]
    }
}