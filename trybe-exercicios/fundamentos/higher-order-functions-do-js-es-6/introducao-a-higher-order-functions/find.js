const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const verifyNumber = numbers.find((number) => number % 3 === 0);

const verifyNumber2 = numbers.find((number) => number % 5 === 0);

console.log(verifyNumber);
console.log(verifyNumber2);

// exercicio 2 

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const verifyName = names.find((name) => name.length > 5);

console.log(verifyName);


// exercicio 3 

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui

  const verifyMusic = musicas.find((music) => music.id === '31031685');

  console.log(verifyMusic);