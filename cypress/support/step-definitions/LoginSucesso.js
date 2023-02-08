const Pages = require("../pages/pageModel")
const pages = new Pages()

Given("que o usuário está na tela inicial de login da plataforma", () => {
    pages.apresentacaoPage.visitShopkeeperPortal()
})

And("tenha clicado no botão 'Iniciar Login'", () => {
    pages.apresentacaoPage.startLogin()
})

And("preencheu seu CPF", () => {
    pages.loginPage.fillCPFInput()
})

And("preencheu a senha", () => {
    pages.loginPage.fillPasswordInput()
})

And("selecionou o botão 'Acessar'", () => {
    pages.loginPage.submitLoginData()
})

When("os dados do login forem validados com sucesso", () => {
    pages.loginPage.validateLoginSuccess()
})

Then("a plataforma deve permitir o acesso a plataforma", () => {
    pages.selecaoLojaPage.validateStoreSelectionOpened()
})


And("tenha clicado no botão Acesse sua conta okta", () => {
    pages.apresentacaoPage.startLoginOkta()
})


And("E o modal tenha sido exibido", () => {
    pages.loginPage.validadeModalOkta();
})

And("preencheu o username", () => {
    pages.loginPage.fillUsernameInputOKTA();
})

And("preencheu o password", () => {
    pages.loginPage.fillPasswordInputOKTA();

})

And("selecionou o botão sign in", () => {
    pages.loginPage.submitLoginDataOKTA();
})



