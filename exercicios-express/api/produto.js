module.exports = (app, text) => {
    function salvar(req, res) {
        res.send('Produto > salvar >' + texto)
    }

    function obter(req, res) {
        res.send('Produto > salvar >' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}