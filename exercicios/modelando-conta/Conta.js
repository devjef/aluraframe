//Criando classe Pai

class Conta {

    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }
    //Caso o programador ao instanciar uma classe filha esqueça de declarar o método atualiza, lançamos o erro
    
    atualiza(taxa) {
        throw new Error('Você deve sobrescrever o método')
    }
}