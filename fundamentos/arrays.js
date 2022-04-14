const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) //Retorna undefined

valores[4] = 10 //define o valor da posição
console.log(valores)
console.log(valores.length) //Retorna o tamanho do array

valores.push({id: 3}, false, null, 'teste') //Adiciona valores ao array
console.log(valores)

console.log(valores.pop()) //Retorna a ultima posição do array e retira ele de lá
delete valores[0] //deleta um valor
console.log(valores)

console.log(typeof valores) //Retorna o tipo da variavel

