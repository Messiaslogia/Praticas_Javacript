/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("O dia semana é Domingo")
            break;
        case 2:
            console.log("O dia semana é Segunda-feira")
            break;
        case 3:
            console.log("O dia da semana é Terça-feira")
            break;
        case 4:
            console.log("O dia da semana é Quarta-feira")
            break;
        case 5:
            console.log("O dia da semana é Quinta-feira")
            break;
        case 6:
            console.log("O dia da semana é Sexta-feira")
            break;
        case 7:
            console.log("O dia da semana é Sabado")
            break;
        default:
            console.log("data inválida")
            break;
    }
}

diaDaSemana(45)