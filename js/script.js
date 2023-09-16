const res = document.getElementById('result');
const erroDigitacao = document.getElementById('erro')

const pessoaPessou = document.getElementById('pessoa')
const roboPessou = document.getElementById('robo')
const span = document.querySelector('.span')
const respostaFinal = document.getElementById('renasfil')

const array = [1]

function somar() {
  const soma = array.map((fn) => fn + 1)
  array[0] = soma[0]
  res.innerHTML = soma[0]
}

function subtrair() {
  const subtrair = array.map((fn) => fn - 1)
  array[0] = subtrair[0]
  res.innerHTML = subtrair[0]
}

function  ClicouBotao(){
    if(array[0] === 0 || array[0] > 5 || array[0] < 1){
      erroDigitacao.style.display = 'block'
      span.style.display = 'none'
      respostaFinal.style.display = 'none'
    }

    else{
      erroDigitacao.style.display = 'none'
      span.style.display = 'block'
      respostaFinal.style.display = 'block'
      
      const numero = Math.floor(Math.random() * 5) + 1;
      respostaFinal.style.display = 'block'
      
      if(numero == array[0]){
          respostaFinal.innerHTML = 'Você Acertou'
        }

        else{
          respostaFinal.innerHTML = 'Você Errou'
        }
    
        roboPessou.innerHTML  = `Robo Pesou no ${numero}`
        pessoaPessou.innerHTML = `Você pessou no ${array[0]}`
    }
}
