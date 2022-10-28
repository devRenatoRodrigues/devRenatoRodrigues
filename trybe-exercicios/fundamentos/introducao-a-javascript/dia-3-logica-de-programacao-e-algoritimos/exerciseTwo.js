// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter 
//uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. 
//Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo 
//está funcionando corretamente.

let word = 'Palmeiras minha vida é você';
let inverterWord = ''

for (let i = 0; i < word.length; i += 1) {
    inverterWord += word[word.length - 1 - i]
}
console.log (inverterWord)