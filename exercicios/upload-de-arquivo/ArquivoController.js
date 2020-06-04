//Sua tarefa é implementar o método envia de ArquivoController. Ele deverá ler a entrada do usuário e adequá-la ao construtor de Arquivo. Assim que você conseguir criar uma instância de arquivo, você deve imprimir seus dados no console.

//Lembre-se que o usuário digita no campo de entrada os dados do arquivo no formato: nome / tamanho / tipo e deve estar em caixa alta!

class ArquivoController {

    constructor() {
        this._inputDados = document.getElementById('dadosArquivo');
    }

    envia() {

        //cria um Arquivo com as suas propriedades;
        let arquivo = ArquivoHelper.cria(this._inputDados.value)

        console.log(`Nome: ${arquivo.nome}, Tamanho: ${arquivo.tamanho}, Tipo: ${arquivo.tipo}`)

        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}