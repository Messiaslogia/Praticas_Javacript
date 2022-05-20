/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.


 */

function jurosSimples(juros, capital, tempo){
    let sJuros = juros
    let sCapital = capital
    let sTempo = tempo

    return sCapital +(sCapital * sJuros * sTempo)
}

function jurosCompostos(juros, capital, tempo){
    return capital *(1 + juros) ** tempo

}

console.log(jurosSimples(10/100, 100, 2))
console.log(jurosCompostos(10/100, 100, 2))
