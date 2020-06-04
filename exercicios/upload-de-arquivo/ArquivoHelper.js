class ArquivoHelper {

    static cria(informacao) {
        return new Arquivo(...informacao.toUpperCase().split('/'))
    }
}