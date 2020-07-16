class NegociacaoController {

    constructor() {

        this._ordemAtual = '';

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem'
        );

        this._mensagem = new Bind(new Mensagem(), new MensagemView($('#alertaMensagem')), 'texto');
    };

    adiciona(e) {

        e.preventDefault();

        try {
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._limpaInputs();
        } catch (erro) {
            this._mensagem.texto = erro;
        }

    };

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    };

    _limpaInputs() {
        this._inputData.value = '',
            this._inputQuantidade.value = 1,
            this._inputValor.value = 0.0

        this._inputData.focus();
    };

    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Lista apagada com sucesso';
    };

    importaNegociacoes() {

        let service = new NegociacaoService();

        service.obterNegociacoes()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações do período importadas com sucesso';
            })
            .catch(error => this._mensagem.texto = error);
    }

    ordena(coluna) {

        if (this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }

        this._ordemAtual = coluna;
    }
}