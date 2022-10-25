// Somar os número de 1 a 50:
// let soma = 0;
// for (let index = 1; index <= 50; index += 1) {
//     soma += index;
// }
// console.log (soma)


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let intervalo = [];
// for (let i = 2; i <= 150; i++) {
//     if (i % 3 === 0) {
//         intervalo.push(i)
//     }
// }
// if (intervalo.length == 50) {
//   console.log("Você tirou a sorte grande!")
// }

// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let idadeC = 20
// let idadeM = 20
// let idadeB = 20

// if (idadeC < idadeM && idadeC < idadeB) {
//   console.log("Carolzita é a mais nova");
// } else if (idadeM < idadeB && idadeM < idadeC) {
//   console.log("Murilo é o mais novo");
// } else if (idadeB < idadeC && idadeB < idadeM) {
//   console.log("Baêta é a pessoa mais nova");
// } else {
//   console.log("Todos possuem a mesma idade");
// }

//Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Player 1 won” ou “A Ties” ou “Player 2 won”.
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let player1 = scissors;
let player2 = rock;

if (player1 == rock) {
    if (player2 == scissors) {
     console.log ("Player 1 Won"); 
    } else if (player2 == paper) {
     console.log ('Player 2 Won');   
    } else if (player2 == rock) { 
     console.log ("A ties");
    } 
}
else if (player1 == paper) {
    if (player2 == rock) {
    console.log ('Player 1 Won');
    } else if (player2 == scissors) {
    console.log ('Player 2 Won');
    } else if (player2 == paper) {
    console.log ('A Ties');
    } 
}

else if (player1 == scissors) {
    if (player2 == rock) {
    console.log ('Player 2 Won'); 
    } else if (player2 == paper) {
    console.log ('Player 1 Won');
    } else if (player2 == scissors) {
    console.log ('A Ties');
    }    
}






// Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// Bônus: Crie a condição utilizando operador ternário.

// let idade = 18
// let maiorDeIdade = (idade >= 18 ) ? true : false;
// (maiorDeIdade === true) ?
//     console.log ('A pessoa é maior de idade')
// :
//     console.log ('A pessoa NÃO é maior de idade')
