// //Responsavel pelo servidor, tanto para receber os dados estaticos
// // E outros serviços

const bodyParser = require('body-parser') //Interpreta os dados de um request
const express = require('express') //Transforma os dados vindos de um formulario submit em objeto
const app = express() //Se vier um JSON no body da requisição ele o transforma em objeto

app.use(express.static('.')) //Determina a pasta(arquivos estáticos) em que o servidor ira monitorar e servir
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('OK')) //Quando vier uma request tipo GET chama uma função q retorna um valor
app.listen(8081), () => console.log('Executando...')