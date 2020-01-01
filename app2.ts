import { Pessoa } from './Pessoa';
import { Carro } from './Carro';
import { Concessionaria } from './Concessionaria';

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

concessionária.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == pessoaA.dizerCarroPreferido()){

        //compra o carro
        pessoaA.comprarCarro(carro)
    }
})


console.log(pessoaA.dizerCarroQueTem())


