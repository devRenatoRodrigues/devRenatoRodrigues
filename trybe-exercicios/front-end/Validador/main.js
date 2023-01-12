import validator from 'validator';

const texto = document.querySelector('#value');
const botao = document.querySelector('#validar');
const select = document.querySelector('#input-valor');
const resposta = document.querySelector('#resposta');

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const verifica = {
    cpf: validator.isTaxID(texto.value, 'pt-BR'),
    email: validator.isEmail(texto.value),
  };
  resposta.innerHTML = `A validação retornou ${verifica[select.value]}`;
});
