const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

//REQUISIÇÃO GET
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
    next()
})

//REQUISIÇÃO GET comparametos
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id)) 
    next()
})

// REQUISIÇÃO POST
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})


// //REQUISIÇÃO GET
// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) //Converte para JSON
//     next()
// })

// //REQUISIÇÃO POST
// // app.post('/produtos', (req, res, next) => {
// //     res.send({nome: 'Carro', preco: 23.45}) //Converte para JSON
// // })

// // //REQUISIÇÃO DE QUALQUER TIPO
// // app.use('/produtos', (req, res, next) => {
// //     res.send({nome: 'usando', preco: 3.45}) //Converte para JSON
// // })

