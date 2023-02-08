    const ElementsJson = require("../../elements/elements.json")


class ApresentacaoPage {
    visitShopkeeperPortal() {
        cy.visit("/", {log: false})
        cy.log("Apresentação - Acesso a tela de apresentação do portal lojista")
    }

    startLogin() {
        cy.screenshot('portal_lojista/Apresentacao')
        cy.log("Apresentação - Gero o screenshot da tela de apresentação)")
        cy.get(ElementsJson.apresentacao_iniciarLogin_btn)
            .click()
        cy.log("Apresentação - Clico no botão 'Iniciar Login'(usuário direcionado para tela de login)")
    }

    
    startLoginOkta(){
        cy.screenshot('portal_lojista/Apresentacao')
        cy.get(ElementsJson.apresentacao_okta_btn).click();

    }

    visitPlatform() {
        cy.visit(Cypress.config("baseUrlPlatform"), {log: false})
        cy.log("Apresentação - Acesso a tela de apresentação do platform")
    }

    selectPlatformAcess() {
        cy.get(ElementsJson.apresentacao_acessoViaPlataforma_rdb)
            .siblings(ElementsJson.apresentacao_selecionarRadioButton_div, {log: false})
            .click()
        cy.log("Apresentação - Clico no Radio Button 'Acesso via plataforma'")
    }

    startLoginPlatform() {
        cy.screenshot('platform/Apresentacao')
        cy.log("Apresentação - Gero o screenshot da tela de apresentação)")
        cy.get(ElementsJson.apresentacao_iniciarLoginPlatform_btn)
            .click()
        cy.log("Apresentação - Clico no botão 'Avançar'(usuário direcionado para tela de login)")
    }

}

module.exports = ApresentacaoPage