{{{{
    var sera = 'Será???' // Variavel visivel em todos os escopos
}}}}

console.log(sera)

function teste(){
    var local = 123 // Var visível somente dentro do escopo da função 
    console.log(local)
}

teste()
console.log(local) // Retorna um erro 