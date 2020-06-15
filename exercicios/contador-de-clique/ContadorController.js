class ContadorController {

    constructor() {
        this._contador = 0;
        console.log(this._contador);
    }

    get contador() {
        return this._contador;
    }

    //o metodo incrementar é acessado através do atributo onclick no botão, a cada clique é incrementado +1

    incrementar() {
        this._contador++;
        console.log(this._contador);
    }
}