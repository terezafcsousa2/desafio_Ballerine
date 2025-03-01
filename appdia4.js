let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio Rafa Ballerini.';

console.log('ola');
let contador = 0;
let acertouNumero = 7;


while (contador < 3){
  
  let chute = prompt ('Qual o valor que você deseja chutar?');
  if (chute == acertouNumero){
    alert('Parabéns você acertou o número ');
    contador = 3;
  }
  chute = prompt('Chute outro valor');

  if (chute == acertouNumero){
    alert('Parabéns você acertou o número ');
    contador++;
  }

  chute = prompt('Chute outro valor');
  if (chute == acertouNumero){
    alert('Parabéns você acertou o número ');
    contador ++;
  } else {alert(`Que pena não foi dessa vez, o número era ${acertouNumero}`);contador = 3;}












  


