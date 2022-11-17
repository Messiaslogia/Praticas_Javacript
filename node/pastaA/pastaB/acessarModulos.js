//Sempre respeitar as camelCases
const moduloA = require('../../moduloA');
console.log(moduloA)

//Exportando modulo sem passar caminho e sim pelo nome da pasta dentro de node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

// Ele le o arquivo index.js da pasta 
const c = require('./pastaC')
console.log(c.ola2)

// Exportação nativa do node
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)