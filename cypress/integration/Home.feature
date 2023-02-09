# utf-8
# language: pt
# codigo do cenario no confluence: 

@PlatformHome
Funcionalidade: Login

@HomePainel
Cenário: Home do painel
Dado que o usuário realizou o login 
E clicou na home
E visualizou os 5 blocos com a respectiva somatória de propostas
Quando o usuário clicar em algum dos blocos
Então a tela será scrollada para a busca, já filtrado com a label selecionada
E ele verá as propostas ordenadas da mais recente para a mais antiga
teste gitflow retirar
