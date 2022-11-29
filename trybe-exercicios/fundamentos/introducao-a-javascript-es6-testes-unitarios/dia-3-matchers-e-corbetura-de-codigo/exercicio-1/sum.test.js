const sum = require('./sum');

describe('a função sum retorna a soma do parâmetro a + b', () => {
it('testar se o retorno de 4 + 5 é 9 ', () => {
expect(sum(4,5)).toBe(9)
});
it('testar se o retorno de 0 + 0 é 0', () => {
expect(sum(0,0)).toBe(0) 
});
it('testar se sum retorna erro quando um dos parâmetros é uma string', () => {
expect(() => sum(4,'5')).toThrow(Error)
});
it('testar se a mensagem de erro é parameters must be numbers quando recebe 4 + "5"', () => {
    expect(() => sum(4,'5')).toThrow(Error('parameters must be numbers'))
});
 });