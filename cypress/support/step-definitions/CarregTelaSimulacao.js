const Pages = require('../pages/pageModel')
const pages = new Pages()

Given("que a resposta da análise de prévia de risco do cliente tenha sido positiva", () => {
    pages.apresentacaoPage.visitShopkeeperPortal()
    pages.apresentacaoPage.startLogin()
    pages.loginPage.fillCPFInput()
    pages.loginPage.fillPasswordInput()
    pages.loginPage.submitLoginData()
    pages.loginPage.validateLoginSuccess()
    pages.selecaoLojaPage.validateStoreSelectionOpened()
    pages.selecaoLojaPage.clickSearchField()
    pages.selecaoLojaPage.fillSearchField()
    pages.selecaoLojaPage.showList()
    pages.selecaoLojaPage.validateHighlighted()
    pages.selecaoLojaPage.validateOrder()
    pages.selecaoLojaPage.selectLoja()
    pages.selecaoLojaPage.submitSelecaoLojasData()
    pages.homePage.clickNewProposalBtn()
    pages.clienteVeiculoPage.validateTitle()
    pages.clienteVeiculoPage.fillClientCPF()
    pages.clienteVeiculoPage.validateSubmitBtnEnabled()
    pages.clienteVeiculoPage.clickClientVehicleSubmit()
});

When("o usuário entrar na tela de simulação", () => {
    pages.simulacao.validateTitle()
	
});

Then("a plataforma recuperará as informações necessárias, as enviando para a precificação - enquadramento em tabelas de preços -  e a calculadora", () => {
	pages.simulacao.validateRequests()
});

And("os valores de entrada, parcela e comissão calculados", () => {
	pages.simulacao.validateInstallment()
});

And("a tela de simulação carregada, com seus componentes", () => {
	
});
