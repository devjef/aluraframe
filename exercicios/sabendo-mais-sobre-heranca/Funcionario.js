//Precisamos criar um novo funcionario, se for secretária, também precisamos criar o nome de quem ela é subordinada

class Funcionario {

    constructor(nome) {
        this._nome = nome
    };

    set nome(nome) {
        this._nome = nome;
    };

    get nome() {
        return this._nome;
    };

};

class Secretaria extends Funcionario {

    constructor(nome, funcionario) {
        // É necessário isolar o parametro que a classe Pai está prepara para receber, assim podemos usar o constructor de Secretaria como queremos, sem atrapalhar o funcionamento do constructor da classe Funcionario

        super(nome);
        this._funcionario = funcionario;
    };

    atendeTelefone() {
        console.log(`${this._nome} atendendo o telefone`)
    };
}