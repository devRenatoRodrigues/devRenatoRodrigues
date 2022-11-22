const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }).toEqual(createItem('banana', 'kg', 1.99, 20))
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99).quantity).toBe(0)
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect( () => createItem()).toThrow(Error)
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect( () => createItem(1.55, 'kg', 1.99, 10)).toThrow(Error('O nome do item deve ser uma string'))
  });
  it('Lança um erro se o preço é negativo', () => {
    expect( () => createItem('melancia', 'kg', -5, 10)).toThrow(Error('O preço do item deve ser maior que zero'))
  });
  it('Lança um erro se o preço é zero', () => {
    expect( () => createItem('melancia', 'kg', 0, 10)).toThrow(Error('O preço do item deve ser maior que zero'))
  });
});