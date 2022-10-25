//Utilize a estrutura de repetição for para escrever dois algoritmos: 
//um que retorne a maior palavra desse array e outro que retorne a menor.
//Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let largerWord = array[0]
let smallerWord = array[0]

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > largerWord.length) {
        largerWord = array[i]
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallerWord.length) {
        smallerWord = array[index]
    }
}

console.log (largerWord)
console.log (smallerWord)
