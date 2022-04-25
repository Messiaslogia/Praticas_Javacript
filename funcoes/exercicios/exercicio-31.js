/**
 *  31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */

let vetor = [7, 8, 9, -10, -2, -20, -21, 50, 30]


function valoresNega(vetor){
    let valoresNegativos = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            valoresNegativos++
        }
    }
    
    return valoresNegativos
}

console.log(valoresNega(vetor))
