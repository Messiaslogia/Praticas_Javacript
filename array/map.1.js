//Map serve para transformar um array em outro serve para mapear os arrays

const nums = [1, 2, 3, 4, 5]

//For com propósito

let resultado = nums.map(function (e) { //Map não modifica o array ele gera um novo array
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e *3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)