import { Carro } from './Carro';

export class Pessoa {
    private nome: string = ''
    private carro: any
    private carroPreferido: string = ''

    constructor(
        nome: string,
        carroPreferido: string
    ) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}