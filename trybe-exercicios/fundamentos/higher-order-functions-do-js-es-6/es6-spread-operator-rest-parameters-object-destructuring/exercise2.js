// escreva sum abaixo


const sum = (...numb) => numb.reduce((acc, curr) => acc + curr, 0)


console.log(sum(4, 5, 6))