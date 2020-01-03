import { Carro } from "./Carro";
import { Moto } from "./moto";
import { Concessionaria } from "./Concessionaria";


let carro = new Carro('S10', 4);
carro.acelerar()

let moto = new Moto();
moto.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('', []);


console.log(carro)
console.log(moto)

console.log(concessionaria.fornecerHorariosDeFuncionamento())

