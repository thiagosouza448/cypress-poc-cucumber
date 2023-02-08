const Pages = require("../pages/pageModel")
const pages = new Pages()

Given("que o usuário está na tela inicial de login do platform", () => {
    pages.apresentacaoPagePlatform.visitPlatform()
});

And("tenha clicado no botão radio 'Acesso via plataforma'", () => {
    pages.apresentacaoPagePlatform.selectPlatformAcess()
});

And("clicou no botão 'Avançar'", () => {
    pages.apresentacaoPagePlatform.startLoginPlatform()
});

And("preencheu seu usuário", () => {
   pages.loginPagePlatform.fillUsernameInput();
});

And("preencheu a senha", () => {
    pages.loginPagePlatform.fillPasswordInput()
});

And("selecionou o botão 'Acessar'", () => {
    pages.loginPagePlatform.submitLoginData()
});

When("os dados de login forem validados com sucesso", () => {
    pages.loginPagePlatform.validateLoginData()
});

And("o token do MFA por preenchido no campo", () => {
    pages.loginPagePlatform.fillTokenMFA()
});

And("o usuário clicar no botão 'Validar'", () => {
    pages.loginPagePlatform.submitTokenMFA()
});

Then("a plataforma deve permitir o acesso", () => {
    pages.homePagePlatform.validateLoginSuccess()
});
