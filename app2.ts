class Carro {
    private modelo: string = ''
    private numeroDePortas: number = 0
    private velocidade: number = 0

    constructor(
        modelo: string,
        numeroDePortas: number
    ) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    // Recupera a velocidade do objeto e a modifica
    public acelerar(): void {
        this.velocidade =  this.velocidade + 10
    }

    // Recupera a velocidade do objeto e a modifica 
    public parar(): void {
        this.velocidade = 0
    }

    // Recupera a velocidade do objeto
    public velocidadeAtual(): number {
        return this.velocidade;
    }
}

class Concessionaria {
    private endereco: string = ''
    private listaDeCarros: any

    constructor(
        endereco: string
    ){
        this.endereco = endereco
    }

    public fornecerEndereco(): string {
        return this.endereco
    }   

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

class Pessoa {
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

    public comprarCarro(carro: any): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}

let pessoa = new Pessoa('Gabriel', 'Amarok')
console.log(pessoa.dizerCarroPreferido())
