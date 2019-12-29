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
    private listaDeCarros: Array<Carro>

    constructor(
        endereco: string,
        listaDeCarros: Array<Carro>
    ){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }   

    public mostrarListaDeCarros(): Array<Carro> {
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

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}

/** Criar carros */
let carroA = new Carro('Amarok',4)
let carroB = new Carro('S10',4)
let carroC = new Carro('Corolla',4)

/** Montar lista de carros da concessionária */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionária = new Concessionaria('Avenida Paulista', listaDeCarros)

/** Exibir a lista de carros */
// console.log(concessionária.mostrarListaDeCarros())

/** Criar um cliente para comprar um carro */
let pessoaA = new Pessoa('Gabriel', 'S10')
let pessoaB = new Pessoa('Bruna', 'Up!')

concessionária.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == pessoaA.dizerCarroPreferido()){

        //compra o carro
        pessoaA.comprarCarro(carro)
    }
})


console.log(pessoaA.dizerCarroQueTem())


