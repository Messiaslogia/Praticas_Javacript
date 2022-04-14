function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 21994.9))
console.log(criarProduto('iPad', 21994.9))
