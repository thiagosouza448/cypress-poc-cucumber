const Pages = require("../pages/pageModel")
const pages = new Pages()

Given("que a Plataforma exibiu a tela de seleção de lojas", () => {
    pages.apresentacaoPage.visitShopkeeperPortal()
    pages.apresentacaoPage.startLogin()
    pages.loginPage.fillCPFInput()
    pages.loginPage.fillPasswordInput()
    pages.loginPage.submitLoginData()
    pages.loginPage.validateLoginSuccess()
    pages.selecaoLojaPage.validateStoreSelectionOpened()
})

And("o usuário clicou no campo de busca", () => {
    pages.selecaoLojaPage.clickSearchField()
})

When("o usuário digitar letras ou números no campo", () => {
    pages.selecaoLojaPage.fillSearchField()
})

Then("ele verá as lojas correspondentes à sua busca de forma dinâmica", () => {
    pages.selecaoLojaPage.showList()
})

And("os caracteres buscados estarão grifados", () => {
    pages.selecaoLojaPage.validateHighlighted()
})

And("os resultados estarão ordenados por ordem crescente do código da loja", () => {
    pages.selecaoLojaPage.validateOrder()
})
