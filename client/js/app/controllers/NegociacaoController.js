class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    };

    adiciona(e) {
        e.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._limpaInputs();

        console.log(this._listaNegociacoes.negociacoes)
    };

    _criaNegociacao() {
        return  new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    };

    _limpaInputs() {
        this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = 0.0

        this._inputData.focus()
    };

}