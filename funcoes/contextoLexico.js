const valor = 'Global'

function minhaFuncao() { // A função carrega com sigo aonde ela foi definida
    console.log(valor) //ira retornar o Global
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()