const ElementsJson = require("../../elements/elements.json")



class BackOfficePagePlatform {

    SearchProposalDocument() {
        cy.get(ElementsJson.search_proposal_document).type(Cypress.config("cpfAprovado"))
        cy.get(ElementsJson.btn_pesquisar_backoffice).click()
        cy.intercept('POST', `${Cypress.config("baseUrlApi")}/graphql/1.0.0/graphql`).as('proposal')

        cy.wait('@proposal')
            .then(res => {
                cy.decriptarXhr(res.response.body.enc)
                    .then(result => {
                        expect(result.status)
                            .to
                            .equal(200)
                    })

            })
    }
    validatrOrderProposal() {
        cy.wait('@proposal')
        var time = 0 
        var time_prev = 0
        cy.get('.card-radio').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes('new')) {
                expect(text).to.eq('\n                                                              new\n                                                           ')
    
            }
            if (text.includes('processing')) {
                expect(text).to.eq('\n                                                              processing\n                                                           ')
            }
    
        })


    }
}

module.exports = BackOfficePagePlatform