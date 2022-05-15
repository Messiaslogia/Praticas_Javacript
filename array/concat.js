//concat =  concatena arrays em um novo array não modifica arrays

const filhos = ['Maria', 'José']
const filhas = ['lena', 'lorena']
const irmaos = filhos.concat(filhas)
console.log(irmaos, filhos, filhas)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) 

