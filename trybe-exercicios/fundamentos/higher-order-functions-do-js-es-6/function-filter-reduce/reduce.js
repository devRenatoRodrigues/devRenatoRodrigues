// minha lógica
const numbers = [50, 85, -30, 3, 15];

let maiorValor = 0
numbers.reduce((acc, curr) => {
    if (curr > acc){
        maiorValor = curr
    }

    return maiorValor
}, 0);

console.log (maiorValor)

///// em menos linha
const numbers = [50, 85, -30, 3, 15];
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger);
console.log(bigger);


//exercico 2

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const par = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;

const sumNumbers = (arr) => arr.filter(par).reduce(sum);

console.log (sumNumbers(numbers))


numbers.reduce((acc, curr) => {
if (curr % 2 === 0){
    acc + curr
}
return acc
}, 0);

console.log(acc)