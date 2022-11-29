const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui

  const cadastrarEmail = (email) => {
    console.log(`o email ${email} está cadastrado em nosso banco de dados`)
  };

  emailListInData.forEach((item) => {
    cadastrarEmail(item);
  })