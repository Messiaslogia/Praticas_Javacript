//Object.preventExtesions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome ='Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

//Objeto.seal

const pressoa = {nome: 'Julia', idade:35}
Object.seal(pessoa)
console.log(`Selado`, Object.isSealed)

pessoa.sobrenome = 'Silva'
delete PermissionStatus.nome
pessoa.idade = 29
console.log(pessoa)