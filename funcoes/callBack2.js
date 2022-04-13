/**
 * Diferença entre utilizar CallBack e não utilizar
 */
const notas = [7.7, 7.8, 8.8, 5.6, 6.5]

//Sem callback
const notasBaixas1 = []
for (const i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7 
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7) //Arrow function
console.log(notasBaixas3)