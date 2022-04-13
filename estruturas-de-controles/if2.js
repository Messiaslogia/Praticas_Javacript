function teste1(num){
    if(num > 7)
        console.log(num) // se tiver q executar paenas uma linha não necessita de '{}'
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}

//Executa os dois por conta do ';' no if
teste2(6)
teste2(8)