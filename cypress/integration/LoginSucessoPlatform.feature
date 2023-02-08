# utf-8
# language: pt
# codigo do cenario no confluence: WAO58-CT03

@platform
Funcionalidade: Login

@LoginComSucessoPlatform
Cenário: Login via usuário e senha com sucesso platform
Dado que o usuário está na tela inicial de login do platform
E tenha clicado no botão radio 'Acesso via plataforma'
E clicou no botão 'Avançar'
E preencheu seu usuário
E preencheu a senha
E selecionou o botão 'Acessar'
Quando os dados de login forem validados com sucesso
E o token do MFA por preenchido no campo
E o usuário clicar no botão 'Validar'
Então a plataforma deve permitir o acesso 


