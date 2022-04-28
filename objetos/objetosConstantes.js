// tornar um objeto constante

const pessoa = {nome: 'joão'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // congela o objeto, não permitindo nenhuma alteração nele

//Não funcionára
pessoa.nome = 'Maria'
pessoa.end =  'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) //Objeto constante

//teste
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
