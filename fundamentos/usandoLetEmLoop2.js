const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i)
    })
}

//Por a variavel ser do tipo "let" ela respeita o escopo
funcs[2]()
funcs[8]()