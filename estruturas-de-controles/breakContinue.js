const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 //Break ele age em cima do bloco de laço mais proximo dele e sai dele
for (x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

//Continue interrompe a repitição corrente vai para proxima repetição
for (y in nums) {
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
//Não usar
externo: for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log(`fim`)