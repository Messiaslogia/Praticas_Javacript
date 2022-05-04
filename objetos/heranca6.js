function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 443)
console.log(aula1, aula2)

//simulando new
function novo(f, ...param) {
    const obj = {}
    obj.__proto__=f.prototype
    f.apply(obj, param)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 123)
console.log(aula3, aula4)
