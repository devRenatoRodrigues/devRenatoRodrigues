//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
//Por exemplo:

let n = 5
let square = '';
for (let a = 1; a <= n; a += 1) {
    for (let b = 1; b <= n; b += 1) {
        square += "*";
    }
    console.log (square);
    square = ''; 
}