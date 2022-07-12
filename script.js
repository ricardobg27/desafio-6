/*let eu = {
    nome: 'Ricardo',
    idade: 26,
    cidade: "Barra Mansa"
}

eu.signo = "virgem";
delete eu.idade;
console.log(eu)*/

let cadastro = [{
    nome:'Ricardo',
    idade:26,
    telefone:9956222356,
    amigo: ['João', 'Maria', 'Pedro', 'Fabio', 'Joana']
},

{
    nome:'Ricardo',
    idade:26,
    telefone:9956222356,
    amigo: ['João', 'Maria', 'Pedro', 'Fabio', 'Joana']
},
{
    nome:'Ricardo',
    idade:26,
    telefone:9956222356,
    amigo: ['João', 'Maria', 'Pedro', 'Fabio', 'Joana']
},
{
    nome:'Ricardo',
    idade:26,
    telefone:9956222356,
    amigo: ['João', 'Maria', 'Pedro', 'Fabio', 'Joana']
},
{
    nome:'Ricardo',
    idade:26,
    telefone:9956222356,
    amigo: ['João', 'Maria', 'Pedro', 'Fabio', 'Joana']
},]

cadastro[0].amigo = [2];
cadastro[1].amigo = [4];
cadastro[2].amigo = [0];
cadastro[3].amigo = [3];
cadastro[4].amigo = [1];

console.log(cadastro)