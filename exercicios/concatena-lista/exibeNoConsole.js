function exibeNoConsole(lista){
   lista.forEach(item => console.log(item))
};

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];

//apenas irá mostrar o primeiro item passado como parâmetro, pois só temos um parametro
exibeNoConsole(listaDeNomes1, listaDeNomes2)

//Como juntar essas duas listas depois de criadas e mostrar no console com a função?

//podemos fazer dessa maneira
let lista = []
lista = listaDeNomes1.concat(listaDeNomes2)
exibeNoConsole(lista)

//ou dessa, sem guardar o array vazio em uma variavel
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2))

//podemos até passar um elemento que não é um array no metodo concat()
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Jeferson'))