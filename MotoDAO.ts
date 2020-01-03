import { DaoInterface } from './DaoInterface';
import { Moto } from './Moto'

export class MotoDAO implements DaoInterface<Moto> {
    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        console.log('Lógica de insert')
        return true
    }
    atualizar(object: Moto): boolean {
        console.log('Lógica de update')
        return true
    }
    remover(id: number): Moto {
        console.log('Lógica de delete')
        return new Moto()
    }
    selecionar(id: number): Moto {
        console.log('Lógica de select')
        return new Moto()
    }
    selecionarTodos(): [any] {
        console.log('Lógica getAll')
        return [new Moto()]
    }
}