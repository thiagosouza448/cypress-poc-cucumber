const ElementsJson = require("../../elements/elements.json")


class HomePagePlatform {
    validateLoginSuccess() {
        cy.contains("Parametrizador")
            .should("be.visible")
        cy.log("Home - Usuário logado com sucesso")
        cy.waitLoadingDisappear(".spinner")
        cy.screenshot("platform/Home")
    }

    clickHome() {
        cy.log("logado")
    }

    validateBlocksHome() {
        cy.get('.bloco-modulo').find('h2').should('have.length', 5)
    }

    GotoBackOffice(){
        cy.get(ElementsJson.btn_backoffice).click()
        cy.intercept('POST',`${Cypress.config("baseUrlApi")}/userprofile/1.0.0/perfis/usuario`).as('proposal')
        cy.wait('@proposal')
    }

}

module.exports = HomePagePlatform