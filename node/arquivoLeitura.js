// Lib do core do node para arquivos

const fs = require('fs');

const caminho = __dirname + '/arquivo.json'

//sincrono 
const conteudo = fs.readFileSync(caminho, 'utf-8') //Ler o arquivo todo
console.log(conteudo)

// assincrono 
// Retorna uma string, ela é transformada em JSON 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Lendo sem usar a lib 'FS' só extanciando o arquivo
const config = require('./arquivo.json')
console.log(config.db)


//Ler arquivos de dentro da pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})