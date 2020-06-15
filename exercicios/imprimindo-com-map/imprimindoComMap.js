let funcionarios = [
    {
        "nome": "Douglas",
        "endereco": "Rua da esquina, 123",
        "salario": "4500"
    },
    {
        "nome": "Felipe",
        "endereco": "Rua da virada, 456",
        "salario": "5000"
    },
    {
        "nome": "Silvio",
        "endereco": "Rua da aresta, 789",
        "salario": "6000"
    }
];

const tbody = document.querySelector('table tbody');

let htmlFuncionarios = funcionarios.map(funcionario => 
    `
    <tr>
        <td>${funcionario.nome}</td>
        <td>${funcionario.endereco}</td>
        <td>${funcionario.salario}</td>
    </tr>
    `

    //usamos join pois a cada linha 'td' é gerado um array, com join juntamos todas elas 
).join('');

tbody.innerHTML = htmlFuncionarios;