/**
 * 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */

function pedido(codigo, quantidade){
    switch (codigo) {
        case 100:
            console.log("Pedido escolhido: Cachorro Quente R$ 3,00")
            console.log(`Valor total: ${3*quantidade}$`)
            break;
        case 200:
            console.log("Pedido escolhido: Hambúrguer Simples R$ 4,00")
            console.log(`Valor total: ${4*quantidade}$`)
            break;
        case 300:
            console.log("Pedido escolhido: Cheeseburguer R$ 5,50")
            console.log(`Valor total: ${5.5*quantidade}$`)
            break;
        case 400:
            console.log("Pedido escolhido: Bauru R$ 7,50")
            console.log(`Valor total: ${7.5*quantidade}$`)
            break;
        case 500:
            console.log("Pedido escolhido: Refrigerante R$ 3,50")
            console.log(`Valor total: ${3.5*quantidade}$`)
            break;
        case 600:
            console.log("Pedido escolhido: Suco R$ 2,80")
            console.log(`Valor total: ${2.8*quantidade}$`)
            break;
        default:
            console.log("Produto não existente")
            break;
    }

}

pedido(700,4)