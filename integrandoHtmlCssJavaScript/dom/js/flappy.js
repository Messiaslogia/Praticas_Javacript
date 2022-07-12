/**
 * 
 * @param {string} tagName 
 * @param {string} className 
 * @returns
 * Retorna elemento e sua classe 
 */
function novoElemento(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

/**
 * 
 * @param {boolean} reversa 

 * Cria uma barreira  com corpo e borda
 */
function Barreira(reversa = false) {
  /**Cria divs no elemento  */
  this.elemento = novoElemento("div", "barreira");
  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");

  /**Se reversa for false a borda ira aparecer antes do corpo
   * se ela for true o corpo aparecera antes da borda
   */
  this.elemento.appendChild(reversa ? corpo : borda);
  this.elemento.appendChild(reversa ? borda : corpo);

  /** Função anônima: Altera o valor da altura do corpo */
  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

/**
 * Função responsavel por inserir um par de Barreiras 
 * sortear sua abertura e seu posicionamento
 * 
 * @param {interger} altura 
 * @param {interger} abertura 
 * @param {interger} x 
 */
function ParDeBarreiras(altura, abertura, x) {

  //Criando um elemento
  this.elemento = novoElemento("div", "par-de-barreiras");

  //Criando duas Barreiras: Uma na parte superior da div e uma na inferior
  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);

  //Enviando objetos para a div "par-de-barreiras"
  this.elemento.appendChild(this.superior.elemento);
  this.elemento.appendChild(this.inferior.elemento);

  //Calculo da abertura entre as duas barreiras tanto Superior quanto Inferior
  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura);
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]); //Pegando o valor de X
  this.setX = (x) => (this.elemento.style.left = `${x}px`);//Setando o valor de X
  this.getLargura = () => this.elemento.clientWidth;

  
  this.sortearAbertura();//Sortea a abertura das barreiras superiores e inferiores
  this.setX(x);
}

// const b = new ParDeBarreiras(700, 200, 200);
// document.querySelector("[wm-flappy]").appendChild(b.elemento); 

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
  this.pares = [
    new ParDeBarreiras(altura, abertura, largura),
    new ParDeBarreiras(altura, abertura, largura + espaco),
    new ParDeBarreiras(altura, abertura, largura + espaco * 2),
    new ParDeBarreiras(altura, abertura, largura + espaco * 3),
  ];

  const deslocamento = 3;
  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      // quando o elemento sair da área do jogo
      if (par.getX() < par.getLargura()) {
        par.setX(par.getX() + espaco * this.pares.length);
        par.sortearAbertura();
      }

      const meio = largura / 2;
      const cruzouOMeio =
        par.getX() + deslocamento >= meio && par.getX() < meio;
      if (cruzouOMeio) notificarPonto();
    });
  };
}

function Passaro(alturaJogo) {
  let voando = false;

  this.elemento = novoElemento("img", "passaro");
  this.elemento.src = "imgs/max.png";

  this.getY = () => parseInt(this.elemento.style.bottom.split("px")[0]);
  this.setY = (y) => (this.elemento.style.bottom = `${y}px`);

  window.onkeydown = (e) => (voando = true);
  window.onkeyup = (e) => (voando = false);

  this.animar = () => {
    const novoY = this.getY() + (voando ? 8 : -5);
    const alturaMaxima = alturaJogo - this.elemento.clientHeight;

    if (novoY <= 0) {
      this.setY(0);
    } else if (novoY >= alturaMaxima) {
      this.setY(alturaMaxima);
    } else {
      this.setY(novoY);
    }
  };

  this.setY(alturaJogo / 2);
}

function Progresso() {
  this.elemento = novoElemento("span", "progresso");
  this.atualizarPontos = (pontos) => {
    this.elemento.innerHTML = pontos;
  };
  this.atualizarPontos(0);
}

const barreiras = new Barreiras(700, 1200, 400, 400);
const passaro = new Passaro(700);
const areaDoJogo = document.querySelector("[wm-flappy]");
areaDoJogo.appendChild(passaro.elemento);
areaDoJogo.appendChild(new Progresso().elemento);
barreiras.pares.forEach((par) => areaDoJogo.appendChild(par.elemento));
setInterval(() => {
  barreiras.animar();
  passaro.animar();
}, 20);
 

// function estaoSobrepostos(elementoA, elementoB){
//   const a = elementoA.getBoundingClientRect()
//   const b = elementoB.getBoundingClientRect()

//   const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
//   const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

//   return horizontal && vertical
// }

// function colidiu(passaro, barreiras){
//   let colidiu = false
//   barreiras.pares.forEach(ParDeBarreiras => {
//     if (!colidiu) {
      
//       const superior = ParDeBarreiras.superior.elemento
//       const inferior = ParDeBarreiras.inferior.elemento
//       colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
//     }
//   })
  
//   return colidiu
// }

// function FlappyBird(){
//   let pontos = 0

//   const areaDoJogo = document.querySelector('[wm-flappy]')
//   const altura = areaDoJogo.clientHeight
//   const largura = areaDoJogo.clientWidth

//   const progresso = new Progresso()
//   const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos))
//   const passaro = new Passaro(altura)

//   areaDoJogo.appendChild(progresso.elemento)
//   areaDoJogo.appendChild(passaro.elemento)
//   barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

//   this.start = () => {
//     //loop do jogo
//     const temporizador = setInterval(() => {
//       barreiras.animar()
//       passaro.animar()

//       if (colidiu(passaro, barreiras)) {
//         clearInterval(temporizador)
//       }
//     }, 20)
//   }
// }

// new FlappyBird().start()
