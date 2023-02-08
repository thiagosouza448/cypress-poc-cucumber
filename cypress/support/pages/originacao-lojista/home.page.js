const ElementsJson = require("../../elements/elements.json")

class HomePage {
    clickNewProposalBtn() {
        cy.waitLoadingDisappear("p.message-loading")
        cy.get(ElementsJson.Home_NovaProposta_btn).highlight()
        cy.waitLoadingDisappear("p.message-loading")
        cy.screenshot('portal_lojista/Home')
        cy.log("Home - Gero um screenshot da tela 'Home'.")
        cy.get(ElementsJson.Home_NovaProposta_btn).click()
        cy.log("Home - Clico no botão 'Criar uma nova proposta'.")
    }

}

module.exports = HomePage