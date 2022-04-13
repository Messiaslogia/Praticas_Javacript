const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i)
    })
}

//Por a variavel ser do tipo "var" ela não respeita o escopo e retornar 10
funcs[2]()
funcs[8]()