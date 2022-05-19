/**
 * 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

let numero = 0

function intervalo(numero){
    switch (numero) {
        case 0:
            console.log("0")
            break;
        case 1:
            console.log("1")
            break;
        case 3:
            console.log("3")
            break;
        case 4:
            console.log("4")
            break;
        case 5:
            console.log("5")
            break;
        case 6:
            console.log("6")
            break;
        case 7:
            console.log("7")
            break;
        case 8:
            console.log("8")
            break;
        case 9:
            console.log("9")
            break;
    
        default:
            console.log("número fora do intervalo")
            break;
    }
}

intervalo(5)