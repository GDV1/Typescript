import { Carro } from './Carro';
import { Moto } from './moto';


let carro = new Carro('S10', 4);
carro.acelerar()

let moto = new Moto();
moto.acelerar();
moto.acelerar()

console.log(carro)
console.log(moto)