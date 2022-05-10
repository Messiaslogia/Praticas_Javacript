const pilotos = ['Vettel' ,'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento ao ultima posição do array
console.log(pilotos)

piloto.shift() // remove o primeiro elemento do array
console.log(pilotos)

piloto.unshift('Hamilton')//Adiciona um elemento a primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos

pilotos.slice(2,0, 'Bottas', 'Massa') //Adiciona um elemento baseado nos argumentos passados
console.log(pilotos)

piloto.splice(3, 1) // Remove um elemento baseado no argumento passado
console.log(piloto)

const algunsPilotos1 = pilotos.slice(2) // Cria um novo array comçanod pelo valor do argumento passado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna um novo array baseado no parametro de inicio e fim

