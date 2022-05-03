const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){

}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)


/**
 * Fala Antônio!



O que o professor quis dizer é: apenas conseguimos acessar o objeto prototype a partir de funções:

function Animal() {
 
}
 
console.log(Animal.prototype)
 
const cachorro = new Animal()
 
console.log(cachorro.prototype)
 
// Resultado:
// Animal {}
// undefined


Ou seja em objetos, não conseguimos acessar a propriedade prototype. No lugar disso acessamos __proto__, veja: 

function Animal() {
 
}
 
console.log(Animal.prototype)
 
const cachorro = new Animal()
 
console.log(cachorro.__proto__)
// Resultado:
// Animal {}
// Animal {}


Mas afinal o que é o prototype e o __proto__? A definição mais simples é: 

prototype é o objeto pai o qual a função construtora usa para comportamentos

__proto__ é o objeto que é criado baseado no prototype da sua função construtora



Por isso que temos o mesmo resultado quando fazemos:

console.log(Animal.prototype) // Animal {}
console.log(cachorro.__proto__) // Animal {}

Tranquilo?


 */