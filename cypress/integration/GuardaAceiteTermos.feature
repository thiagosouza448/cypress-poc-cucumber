# utf-8
# language: pt
# codigo do cenario no confluence:

@portalLojista
Funcionalidade: Pré-Análise

@GuardaAceiteTermos
Cenário: Guarda do Aceite dos Termos
Dado que o usuário está na tela de Pré-análise
E preencheu todos os campos de uma proposta conforme dados mínimos de pré-análise 
E a Plataforma habilitou o botão 'Simular'
Quando ele clicar no botão 'Simular'
Então deve-se guardar o aceite da política

## com o CPF ou CNPJ que foi preenchido, Data e hora de aceite (considerar data e hora em que foi clicado o botão de “Simular”), ID Loja, ID Usuário logado, Aceite aos termos e condições de uso

