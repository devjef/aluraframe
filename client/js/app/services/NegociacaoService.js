class NegociacaoService {

    obtemNegociacoesDaSemana(cb) {

        let xhr = new XMLHttpRequest;

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    const jsonResponse = JSON.parse(xhr.responseText);

                    cb(null, jsonResponse.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                } else {
                    console.log(xhr.responseText)
                    cb('Não foi possível obter as negociações', null)
                }
            }
        }

        xhr.send();

    }


}