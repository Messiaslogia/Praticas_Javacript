const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna a chave do objeto
console.log(Object.values(pessoa)) // retorna o valor da chave
console.log(Object.entries(pessoa)) // retorna o array com chave e valor

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{ // Define as caracteristicas dessa propriedade
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //concatena todos os elementos 

Object.freeze(obj) //Congela o objeto não permitindo alterações
obj.c = 1234
console.log(obj)