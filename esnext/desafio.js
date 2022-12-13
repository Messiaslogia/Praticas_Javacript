const fs = require('fs')
const path = require('path')

function lerArquivo(arquivo) {
    return new Promise(
        resolve => {
            fs.readFile(arquivo, function(_, arquivo) {
                resolve(arquivo.toString())
            })

        })
}

const arquivo = path.join(__dirname, 'dados.txt')

lerArquivo(arquivo)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)