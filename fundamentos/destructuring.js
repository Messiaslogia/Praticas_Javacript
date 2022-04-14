//novo recurso do ES2015
//Destructuring Objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // pegando atributos de um objeto
console.log(nome) 

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // Se o valor não existir retorna undefined
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa // Pegando o atributo(Objeto) dentro de um objeto
console.log(sobrenome, bemHumorada)

const { conta: {ag, num}} = pessoa // Dá erro pois não encontra o atributo no objeto
console.log(ag, num)
