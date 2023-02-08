const ElementsJson = require("../../elements/elements.json")

class SimulacaoPage {
    validateTitle() {
        cy.contains('h2', 'Simulação de Financiamento').should('be.visible')
        cy.log("Simulação - Valido que a tela atual é a tela 'Simulação de Financiamento'.")
    }

    validateRequests() {
        cy.wait('@inputcalculation').then(data => {
                expect(data.response.statusCode)
                .to
                .equal(200)
            })
        
            cy.wait('@pricing',{timeout : 15000}).then(data => {
            expect(data.response.statusCode)
            .to
            .equal(200)
        })        

        cy.wait('@installments').then(data => {
            expect(data.response.statusCode)
            .to
            .equal(200)
        })

        cy.log("Simulação - Valido se as requisições necessárias foram atendidas.")
    }

    validateInstallment() {
        cy.get('.parcela-button-selected').find('.parcela-valor').eq(0).then(r => {
            let parcelas = r.text().match(/[0-9]{2}/g)[0]
            cy.wait('@inputcalculationData').then(data => {
                data.response.body.forEach(element => {
                    if (element.numeroParcela == parcelas){
                        cy.get(ElementsJson.Simulacao_Resumos_lbl).eq(0).then(ent => {
                            let entrada = ent.text().replace(/[^0-9]/g,"") 
                            if (entrada == element.valorEntradaRecomendado)
                                cy.log("Simulação - Valido que o valor que aparece no campo 'Entrada' na tela é o mesmo que foi retornado da requisição.")
                        })
                    }
                });
            })
        })


        cy.wait('@installmentsData').then(data => {
            console.log(data.response)
        })

        cy.wait('@pricingData').then(data => {
            console.log(data.response)
        })

    }



}

module.exports = SimulacaoPage

