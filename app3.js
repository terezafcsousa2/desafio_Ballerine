let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio Rafa Ballerini.';



let resposta1 = prompt(' Você quer seguir para área de Front-End ou você quer seguir para a área de Back-End.');


if (resposta1 == 'Front-End'){
  let resposta2 = prompt('Você quer aprender React ou Vue?');
  alert (`Boa escolha, se precisar de ajuda com ${resposta2} é só falar!`);
}
if (resposta1 == 'Back-End'){
  let resposta3 = prompt('Você quer aprender C# ou aprender Java?');
  alert (`Boa escolha, se precisar de ajuda com ${resposta3} é só falar!`);
}

let escolha = prompt(`responda ${resposta1} para continuar se desenvolvendo nessa área, ou Fullstack para outro desenvolvimento`);

alert (`Boa escolha! Boa sorte em sua trilha de ${escolha}!`);

let tecnologias = [];
let resposta_tecnologia = 'ok';

while ( resposta_tecnologia == 'ok') {
 
  let tecnologia = prompt ('Qual tecnologia que você gostaria de aprender? ');
  alert (`${tecnologia}, boa escolha! Bons estudos, se precisar estamos aí para ajudar!`);
  tecnologias.push(tecnologia);
  resposta_tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de se especializar ou aprender, se sim digite ok? Para finalizar a sua lista digite não.');
  
} 
  

alert (`Sua lista de aprendizado:  ${ tecnologias } `);


