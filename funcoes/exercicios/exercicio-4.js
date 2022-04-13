/**
 *  Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

 */

function divisao(dividendo, divisor){
    if(dividendo < divisor){
        console.log('Numeros inválidos')
    }else{
        console.log(`O valor da divisão é: ${dividendo / divisor}`)
        console.log(`O resto da divisao é: ${dividendo % divisor}`)
    }
}

divisao(31,2)