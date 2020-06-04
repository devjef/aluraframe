class DateHelper {

    constructor() {
        throw new Error('A classe DateHelper não pode ser instanceada')
    }

    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('O formato da data deve ser aaaa-mm-dd')
        
        return new Date(texto.split('-'))
    }

    static dataParaTexto(data) {
        return `
        ${data.getDate()}/
        ${data.getMonth() + 1}/
        ${data.getFullYear()}
        `
    }
}