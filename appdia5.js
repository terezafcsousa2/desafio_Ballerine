let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio Rafa Ballerini.';

let matinais = [];
let friosELaticinios = [];
let carnesEpeixes = [];
let mercearia = [];
let limpezaEhigiene = [];
let frutasElegumes =[];
let adicionarItem = 'sim';

while( adicionarItem =='sim'){

  adicionarItem = prompt ('Você deseja adicionar um ítem na sua lista de compras?');

  if (adicionarItem == 'sim'){
  let item = prompt ('O que você deseja adicionar?');
  let tipo = prompt ( 'Digite o número da categoria do seu ítem: 1 Mercearia, 2 Frios e Laticínios, 3 Carnes e Peixes, 4 Hortifruti, 5 Limpeza e Higiene, 6 Frutas e Legumes ou 7 Matinais');
  
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

  if (tipo == 5){
    limpezaEhigiene.push(item);
    console.log(`Limpeza e higiene : ${limpezaEhigiene} `);
  }

  if (tipo == 6){
    frutasElegumes.push(item);
    console.log(`Frutas e legumes : ${frutasElegumes} `);
  }

  if (tipo == 7){
    matinais.push(item);
    console.log (`Matinais : ${matinais} `);
  }  
  }

}


if ( matinais.length){
  console.log (`Matinais : ${matinais}`);
}
if(friosELaticinios.length){
  console.log( `Frios e laticínios : ${friosELaticinios}`);
}
if(carnesEpeixes.length){
  console.log( `Carnes e peixes :${carnesEpeixes}`);
}
if( hortifruti.length){
  console.log( `Hortifruti :${frutasElegumes}`);
}
if(mercearia.length){
  console.log(`Mercearia: ${ mercearia}`);
}
if(limpezaEhigiene.length){
  console.log(`Limpeza e higiene: ${limpezaEhigiene}`);
}
