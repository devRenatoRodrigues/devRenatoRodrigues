const valoresProdutos = [10, 12, 8];
let somaTotal = 0;

for (let index = 0; index < valoresProdutos.length; index = index + 1) {
  somaTotal = somaTotal + valoresProdutos[index];
}

console.log(somaTotal);