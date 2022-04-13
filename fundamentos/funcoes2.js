// Armazenando uma função em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implícito
const subtracao = (a, b) => a - b //Função de uma unica linha
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // passando um parametro só ("a")
imprimir2('Legal!!!')