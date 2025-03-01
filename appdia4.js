let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio Rafa Ballerini.';

console.log('ola');
let contador = 2;
let acertouNumero = Math.floor(Math.random() * 7 +1);
let chute = 0;

while (chute != acertouNumero){
  
  chute = prompt ('Qual o valor que você deseja chutar?');
  if (chute == acertouNumero){
    alert('Parabéns você acertou o número ');
    break 
  }
  
  chute = prompt('Chute outro valor');

  if (chute == acertouNumero){
    alert('Parabéns você acertou o número ');
    break
  }


  chute = prompt('Chute outro valor');
  if (chute == acertouNumero){
    alert('Parabéns você acertou o número ');
    break
  } 

  
  else{alert(`Que pena não foi dessa vez, o número era o ${acertouNumero}`);contador = 3;}
}
