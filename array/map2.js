const carrinho =[
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco":3.75}',
    '{ "nome": "Borracha", "preco":3.25}',
    '{ "nome": "Borracha", "preco":3.15}'
]

//Retorna um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)