// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'kiwi', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacaxi', 'melão', 'melancia'];

const fruitSalad = (fruit, additional) => {
  const fruits = [...fruit, ...additional]
  return fruits
};

console.log(fruitSalad(specialFruit, additionalItens));