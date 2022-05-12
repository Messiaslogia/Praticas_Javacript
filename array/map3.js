//Funcionamento interno do Map

Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0 ; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho =[
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco":3.75}',
    '{ "nome": "Borracha", "preco":3.25}',
    '{ "nome": "Borracha", "preco":3.15}'
]

//Retorna um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)