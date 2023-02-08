# utf-8
# language: pt
# codigo do cenario no confluence: WAO58-CT03

@portalLojista
Funcionalidade: Login / Seleção de Lojas

@LoginComSucesso
Cenário: Seleção de Lojas
Dado que a Plataforma exibiu a tela de seleção de lojas 
E o usuário clicou no campo de busca
Quando o usuário digitar letras ou números no campo
Então ele verá as lojas correspondentes à sua busca de forma dinâmica
E os caracteres buscados estarão grifados
E os resultados estarão ordenados por ordem crescente do código da loja
