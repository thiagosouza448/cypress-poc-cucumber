const Pages = require("../pages/pageModel")
const pages = new Pages()

Given("que o usuário está na tela de Pré-análise", () => {
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
});

And("preencheu todos os campos de uma proposta conforme dados mínimos de pré-análise", () => {
    pages.clienteVeiculoPage.validateTitle()
    pages.clienteVeiculoPage.fillClientCPF()

});

And("a Plataforma habilitou o botão 'Simular'", () => {
	pages.clienteVeiculoPage.validateSubmitBtnEnabled()
});

When("ele clicar no botão 'Simular'", () => {
    pages.clienteVeiculoPage.clickClientVehicleSubmit()
});

Then("deve-se guardar o aceite da política", () => {
	
});
