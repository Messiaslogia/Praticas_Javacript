/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

let nota1 = 10
let nota2 = 3
let valorEquacao = "+"

function calculadora(nota1, nota2, valorEquacao){
    switch (valorEquacao) {
          case "+":
            console.log(nota1+nota2)
            break;

          case "-":
            console.log(nota1+nota2)
            break;

          case "*":
            console.log(nota1+nota2)
            break;

          case "/":
            console.log(nota1+nota2)
            break;
        default:
            console.log("Equação inválida")
            break;
    }
}

calculadora(nota1, nota2, valorEquacao)