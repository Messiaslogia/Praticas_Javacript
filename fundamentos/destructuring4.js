//novo recurso do ES2015
//Destructuring Array

function rand([min = 0, max = 1000]){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand[50, 40])
console.log(rand([955]))
console.log(rand([, 10]))
console.log(rand([])) // Assume o valor padrao da função
console.log(rand()) // desestrutura algo que é undefined (erro)

