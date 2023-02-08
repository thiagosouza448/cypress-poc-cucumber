const Pages = require("../pages/pageModel")
const pages = new Pages()

Given("que o usuário realizou o login", () => {
    pages.apresentacaoPagePlatform.visitPlatform()
    pages.apresentacaoPagePlatform.selectPlatformAcess()
    pages.apresentacaoPagePlatform.startLoginPlatform()
    pages.loginPagePlatform.fillUsernameInput()
    pages.loginPagePlatform.fillPasswordInput()
    pages.loginPagePlatform.submitLoginData()
    pages.loginPagePlatform.validateLoginData()
    pages.loginPagePlatform.fillTokenMFA()
    pages.loginPagePlatform.submitTokenMFA()
});

And("clicou na home", () => {
	pages.homePagePlatform.clickHome()
});

And("visualizou os 5 blocos com a respectiva somatória de propostas", () => {
    pages.homePagePlatform.validateBlocksHome()
});

When("o usuário clicar em algum dos blocos", () => {
	pages.homePagePlatform.GotoBackOffice()
});

Then("a tela será scrollada para a busca, já filtrado com a label selecionada", () => {
    pages.backOfficePlatform.SearchProposalDocument()

});

Then("ele verá as propostas ordenadas da mais recente para a mais antiga", () => {
    pages.backOfficePlatform.validatrOrderProposal()

});
