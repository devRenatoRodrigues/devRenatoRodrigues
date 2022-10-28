//Transforme a função numeroAleatorio em uma arrow function;

//A. function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random()

console.log (numeroAleatorio())


// B.function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

const hello = nome => `Olá, ${nome}`

console.log(hello('Ivan'));

// let nome = 'Ivan';

//C.function nomeCompleto(nome, sobrenome) {
// return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}` 

console.log (nomeCompleto('Ivan', 'Pires'))



