class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        self = this;

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#alertaMensagem'));
        this._mensagemView.update(this._mensagem);
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {
                console.log(target)
                console.log(prop)
                console.log(receiver)

                if (['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    return function() {
                        console.log(`Alteração usando o método ${prop} interceptada`);
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);
                        console.log(target)
                    }
                }

                return Reflect.get(target, prop, receiver)
            }

        });
    };

    adiciona(e) {
        e.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaInputs();
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
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Lista apagada com sucesso';
        this._mensagemView.update(this._mensagem);
    };
}