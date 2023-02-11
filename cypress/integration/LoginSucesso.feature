# utf-8
# language: pt
# codigo do cenario no confluence: WAO58-CT03

@portalLojista
Funcionalidade: Login

@LoginComSucesso
Cenário: Login via CPF e senha com sucesso
Dado que o usuário está na tela inicial de login da plataforma
E tenha clicado no botão 'Iniciar Login'
E preencheu seu CPF
E preencheu a senha
E selecionou o botão 'Acessar'
Quando os dados do login forem validados com sucesso
Então a plataforma deve permitir o acesso a plataforma
teste gitflow retirar



@LoginComSucesso
Cenário: Login via okta com sucesso
Dado que o usuário está na tela inicial de login da plataforma
E tenha clicado no botão Acesse sua conta okta
E E o modal tenha sido exibido
E preencheu o username
E preencheu o password
E selecionou o botão sign in
Quando os dados do login forem validados com sucesso
Então a plataforma deve permitir o acesso a plataforma


@LoginComSucessoProposta
Cenário: Login -Criar nova proposta
Dado que o usuário está na tela inicial de login da plataforma
E visualizou o painel de propostas
Quando o usuario clicar em “Criar nova proposta”
Então ele será direcionado para a tela de pré-análise e simulação
    
