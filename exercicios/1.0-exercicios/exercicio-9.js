function round(notaFinal) {
    if (!(notaFinal % 5 == 0) || (notaFinal % 5 == 0) && notaFinal > 40) {
        let notaAlunoArredondado = ((Math.floor(notaFinal / 5)) * 5) + 5;
        let diferencaNota = notaAlunoArredondado - notaFinal
        if (diferencaNota <= 3) {
            return `Aluno aprovado com nota: ${notaAlunoArredondado}`
        }else{
            return `Aluno aprovado com nota: ${notaFinal}`
        }
    } else {
       return `Aluno reprovado com nota: ${notaFinal}`
    }
}

var notaFinal = 81;
console.log(round(notaFinal));