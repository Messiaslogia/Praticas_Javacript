// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Retorna um NaN por conta de não haver o valor de b na função
imprimirSoma(2, 3, 4, 5, 6) // Ele pega apenas os atributos exigidos pela função(a e b) e o resto ignora
imprimirSoma() //Nan

// Funcao com retorno
function soma(a, b=1){ // Pré definição de valor b=1
    return a + b
}

console.log(soma(2, 3)) //Jogando o retorno da funçã na tela
console.log(soma(2)) //Soma com o valor já pré definido na função (b=1)
console.log(soma())// NaN pois o primeiro atrinuto não existe 