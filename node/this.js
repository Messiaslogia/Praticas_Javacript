// FORA DE UMA FUNÇÃO THIS APONTA PARA O MODULE.EXPORTS
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


// DENTRO DE UMA FUNÇÃO THIS APONTA PARA O GLOBAL
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}