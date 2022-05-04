const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) //Define o prototipo através do valor passado no parâmetro
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { //é possivel definir as propriedades
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} em cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // Retorna a chave dos objetos
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? //Verificar se a propriedade pertecen ou não ao objeto
    console.log(key) : console.log(`Por herança ${key}`)
}