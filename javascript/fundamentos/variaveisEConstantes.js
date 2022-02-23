/**
 * Declaração de váriavel simples
 * melhor usar let doq var
 */
var a = 3
let b = 4

/**
 * Var permite trocar o escopo já criado das váriaveis
 */
var a = 30
let b = 40 

console.log(a, b)

a = 300
b = 400

console.log(a, b)

/**
 * Const não permite alteração alguma em seu escopo
 */
const c = 5
c = 50
console.log(c)
