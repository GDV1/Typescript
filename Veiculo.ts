export class Veiculo {
    protected modelo: string = ''
    private velocidade: number = 0

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