// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato abaixo:

// let numeros = {
//     pares: 0,
//     ímpares: 0,
//   };

function numerosImparOuPar (array) {
    
    let resultado = {
        pares: 0,
        ímpares: 0
      };


    for ( let numeros of array) {   
    
    if (numeros % 2 === 0) {
      resultado.pares += 1
    } else {
        resultado.ímpares += 1
    }

  }
  return resultado
}


console.log(numerosImparOuPar([25, 20, 30, 40, 50, 85, 12, 15]));



