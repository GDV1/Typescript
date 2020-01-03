import { DaoInterface } from './DaoInterface';
import { Veiculo } from './Veiculo'

export class MotoDAO implements DaoInterface<Veiculo> {
    nomeTabela: string = 'tb_veiculo'

    inserir(object: Veiculo): boolean {
        console.log('Lógica de insert')
        return true
    }
    atualizar(object: Veiculo): boolean {
        console.log('Lógica de update')
        return true
    }
    remover(id: number): Veiculo {
        console.log('Lógica de delete')
        return new Veiculo()
    }
    selecionar(id: number): Veiculo {
        console.log('Lógica de select')
        return new Veiculo()
    }
    selecionarTodos(): [any] {
        console.log('Lógica getAll')
        return [new Veiculo()]
    }
}