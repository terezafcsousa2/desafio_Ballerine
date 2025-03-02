let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio Rafa Ballerini.';

let matinais = [];
let friosELaticinios = [];
let carnesEpeixes = [];
let mercearia = [];
let limpezaEhigiene = [];
let frutasElegumes =[];
let adicionarItem = 'sim';
let removerItem = 'sim';
let posicao 

while( adicionarItem =='sim'){

  adicionarItem = prompt ('Você deseja adicionar um ítem na sua lista de compras?');
 
  
  if (adicionarItem == 'sim'){
  let item = prompt ('O que você deseja adicionar?');
  let tipo = prompt ( 'Digite o número da categoria do seu ítem: 1 Mercearia, 2 Frios e Laticínios, 3 Carnes e Peixes, 4 Limpeza e Higiene, 5 Frutas e Legumes ou 6 Matinais');
  
  if (tipo == 1){
    mercearia.push(item);
    console.log(`Mercearia : ${mercearia} `);
  }

  if (tipo == 2){
    friosELaticinios.push(item);
    console.log(`Frios e laticíneos : ${friosELaticinios} `);
  }

  if (tipo == 3){
    carnesEpeixes.push(item);
    console.log (`Carnes e peixes : ${carnesEpeixes} `);
  }

  if (tipo == 4){
    limpezaEhigiene.push(item);
    console.log(`Limpeza e higiene : ${limpezaEhigiene} `);
  }

  if (tipo == 5){
    frutasElegumes.push(item);
    console.log(`Frutas e legumes : ${frutasElegumes} `);
  }

  if (tipo == 6){
    matinais.push(item);
    console.log (`Matinais : ${matinais} `);
  }  
  }
}


while(removerItem == 'sim'){
 

  removerItem =  prompt ('Você deseja remover um ítem na sua lista de compras?');

      
  if(removerItem == 'sim'){
    item = prompt ('O que você gostaria de remover');
    tipo = prompt ( 'Digite o número da categoria do ítem a ser removido: 1 Mercearia, 2 Frios e Laticínios, 3 Carnes e Peixes, 4 Limpeza e Higiene, 5 Frutas e Legumes ou 6 Matinais');
  }
  if()
    
  if (tipo == 1){
    posicao = mercearia.indexOf(item);
    mercearia.splice(posicao,1);
    console.log(`Mercearia : ${mercearia} `);
  }
  if (tipo == 2){
    posicao = friosELaticinios.indexOf(item);
    friosELaticinios.splice(posicao,1);
    console.log(`Frios e laticíneos : ${friosELaticinios} `);
  }

  if (tipo == 3){
    posicao = carnesEpeixes.indexOf(item);
    carnesEpeixes.splice(posicao,1);
    console.log (`Carnes e peixes : ${carnesEpeixes} `);
  }

  if (tipo == 4){
    posicao = limpezaEhigiene.indexOf(item);
    limpezaEhigiene.splice(posicao,1);
    console.log(`Limpeza e higiene : ${limpezaEhigiene} `);
  }

  if (tipo == 5){
    posicao = frutasElegumes.indexOf(item);
    frutasElegumes.splice(posicao,1);
    console.log(`Frutas e legumes : ${frutasElegumes} `);
  }

  if (tipo == 6){
    posicao = matinais.indexOf(item);
    matinais.splice(posicao,1);
    console.log (`Matinais : ${matinais} `);
  }
  else{
    console.log (`${item} não esta na lista!`);
  }
  
} 
if ( matinais.length){
  console.log (`Matinais : ${matinais} `);
}
if(friosELaticinios.length){
  console.log( `Frios e laticínios : ${friosELaticinios} `);
}
if(carnesEpeixes.length){
  console.log( `Carnes e peixes :${carnesEpeixes} `);
}
if(frutasElegumes.length){
  console.log( `Frutas e legumes :${frutasElegumes} `);
}
if(mercearia.length){
  console.log(`Mercearia: ${ mercearia}`);
}
if(limpezaEhigiene.length){
  console.log(`Limpeza e higiene: ${limpezaEhigiene} `);
}
