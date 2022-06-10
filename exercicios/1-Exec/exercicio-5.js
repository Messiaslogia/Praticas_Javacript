function arredondar(){
    let valor = 0.1 + 0.2;
    let valorArredondado = valor.toFixed(2)
    let valorFormatado = valorArredondado.toString().replace('.',',')
    
    
    console.log(`$${valorFormatado}`)
    
    
    

}

arredondar()