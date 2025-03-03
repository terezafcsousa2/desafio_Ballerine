let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio Rafa Ballerini.';


let numero1 = 0;
let numero2 = 0;
let resultado = 0;

let operacao = prompt('Selecione uma operação: soma, subtração, multiplicação, divisão ou sair');

if (operacao == 'sair'){

  console.log ('Até a próxima!');  
}
else
{
  numero1 = parseInt(prompt ('Digite o primiro numero da operação'));
  numero2 = parseInt(prompt ('Digite o segundo número da operação'));

}


selecionaOperador(operacao);

function selecionaOperador(operacao){

  switch (operacao) {

  case  'soma':
    soma(numero1,numero2);
    break;

  case 'subtração':
    subtracao(numero1,numero2);
    break;

  case  'multiplicação':
    multiplicacao(numero1,numero2);
    break;

  case  'divisão':
    divisao(numero1,numero2);
    break;

  default:
    console.log ('Até a próxima!');  

  }
}

function soma(numero1,numero2){
  resultado = numero1 + numero2;
  console.log (`soma :  ${numero1} + ${numero1} = ${resultado}`);
}

function subtracao(numero1, numero2){
  resultado = numero1 - numero2;
  console.log (`subtração :  ${numero1} - ${numero1} = ${resultado}`);
}

function multiplicacao(numero1, numero2){
  resultado = numero1 * numero2;
  console.log (`multiplicação :  ${numero1} x ${numero1} = ${resultado}`);
  
}

function divisao(numero1, numero2){
  resultado = numero1 / numero2;
  console.log (`divisão :  ${numero1} / ${numero1} = ${resultado}`);
  
}



  


