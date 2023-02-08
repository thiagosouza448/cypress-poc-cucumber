# utf-8
# language: pt
# codigo do cenario no confluence:

@portalLojista
Funcionalidade: Simulacao

@CarregTelaSimulacao
Cenário: Carregamento da Tela de Simulação
Dado que a resposta da análise de prévia de risco do cliente tenha sido positiva
Quando o usuário entrar na tela de simulação
Então a plataforma recuperará as informações necessárias, as enviando para a precificação - enquadramento em tabelas de preços -  e a calculadora
E os valores de entrada, parcela e comissão calculados
E a tela de simulação carregada, com seus componentes

##Slider, parcelas, personalização, cupom, custos detalhados, comissão e tarifas
