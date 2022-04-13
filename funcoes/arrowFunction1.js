// Toda arrow function é uma função anônima

let dobro = function (a) {
    return 2 * a
}
console.log(dobro(3))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(2))

dobro = a => 2 * a //return implícito 
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //Sem parâmetros
ola = _ => 'Olá' //Outros modos para sem parâmetros