const { info, printMessage } = require('./printMessage.js');


describe('a função printMessage', () => {
    it('o parâmetro possui a propriedade personagem ?', () => {
        expect(info).toHaveProperty("personagem");
    });

    it('verifique se a resposta contém Boas Vindas,', () => {
        expect(printMessage(info)).toMatch("Boas vindas, " + info.personagem);
    })
});