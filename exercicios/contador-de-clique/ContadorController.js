// ContadorController.js

class ContadorController {

    constructor() {
        this._contador = 0;
        console.log(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementar() {
        this._contador++;
        console.log(this._contador);
    }
}