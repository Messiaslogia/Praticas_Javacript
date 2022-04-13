/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

/*function triangulo(a, b ,c){
    if(a = b && a == c){
        console.log('Trangulo Equilatero')
    }else if (
           a == b && a != c || a != b && a == c||
           b == c && b != a || b != c && b == a){

        console.log('Triangulo Isósceles')

    }else if (a != b && a != c){
       

        console.log('Triangulo Escaleno')
        
    }
}

triangulo(1,1,1)
triangulo(2,2,1)*/



/*const triangulo = function(primeiroLado=1,segundoLado=1,terceiroLado =1){
    if(primeiroLado == segundoLado && primeiroLado == terceiroLado){
        console.log(`é equilatero ${primeiroLado,segundoLado,terceiroLado}`)
    }else if(
        primeiroLado == segundoLado && primeiroLado != terceiroLado 
        || primeiroLado != segundoLado && primeiroLado == terceiroLado 
        || segundoLado == terceiroLado && segundoLado != primeiroLado 
        || segundoLado != terceiroLado && segundoLado == primeiroLado){
        console.log(`é isosceles ${primeiroLado,segundoLado,terceiroLado}`)
    }else if(primeiroLado != segundoLado && primeiroLado != terceiroLado){
        console.log(`é escaleno ${primeiroLado,segundoLado,terceiroLado}`)
    }

}
triangulo(1,2,3)
triangulo(1,2,2)
triangulo(2,1,2)
triangulo(2, 2, 2)
triangulo(1,2,3)*/

const typeTriangle = (a, b, c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
  
      if (a == b && b == c) {
        console.log('Triângulo equilátero');
      }
      else if (a == b || a == c || c == b) {
        console.log('Triângulo isóceles');
      }
      else {
        console.log('Triângulo escaleno');
      }
    }
    else {
      console.log('Nenhuma medida foi informada!');
    }
  
  }
  
  typeTriangle(10, 5, 10);
  typeTriangle(10, 10, 10);
  typeTriangle(3, 4, 5);
  typeTriangle();