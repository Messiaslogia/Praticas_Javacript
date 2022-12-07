//Percorre cada letra de uma palavra
for (let letra of "Coder") {
    console.log(letra)
}

//Percorre o indice do Array
const assuntosEcma = ['Map', 'Set', 'Prommise']
for (const assunto in assuntosEcma) {
    console.log(assunto)
}

//Percorre os valores do Array
for (const assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

//Percorre todos os elementos chave valor do Map
for (const assunto of assuntosMap) {
    console.log(assunto)
}

//Percorre todas as chaves dos elementos do Map
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

//Percorre todos os valores dos elementos do Map
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//Percorre todos os elementos chave valor do Map
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

//Percorre o objeto SET
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}