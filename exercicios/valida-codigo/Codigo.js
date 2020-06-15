//Validação do código feita no submit passando como atributo no form onsubmit="validaCodigo.valida(event)

class Codigo {
    
    constructor() {
        this._inputCodigo = document.getElementById('inputCodigo');
    };

    valida(event){
        event.preventDefault();
        let codigo = inputCodigo.value;
        console.log(codigo)

        if(!/^\D{3}-\D{2}-\d{2}$/.test(codigo))
        return alert('o codigo deve ter o formato ABC-A1-A1')
        
        return alert('codigo ok')
    };
}