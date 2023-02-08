const ElementsJson = require("../../elements/elements.json")
const Cliente = require("../../../fixtures/objs/Cliente.json")

class ClienteVeiculoPage {
    validateTitle(){
        cy.contains('h1', 'Dados do cliente e veículo').should('be.visible')
        cy.log("Dados do Cliente e Veículo - Valido se o texto 'Dados do cliente e veículo' está presente.")
    }
    
    fillClientCPF() {
        cy.get(ElementsJson.home_cpf_ipt).type(Cliente.CPF)
        cy.log("Dados do Cliente e Veículo - Informo o CPF do cliente.")
    }

    validateSubmitBtnEnabled() {
        cy.get(ElementsJson.ClienteVeiculo_Simular_bnt).should('be.enabled')
        cy.log("Dados do Cliente e Veículo - Valido que o botão 'Simular' está habilitado.")
    }

    clickClientVehicleSubmit() {
        cy.screenshot('portal_lojista/DadosClienteVeiculo')
        cy.log("Dados do Cliente e Veículo - Gero o screenshot da tela 'Dados do Cliente e Veículo'.")
        cy.get(ElementsJson.ClienteVeiculo_Simular_bnt).highlight()
        cy.log("Dados do Cliente e Veículo - Clico no botão 'Simular'.")
        cy.get(ElementsJson.ClienteVeiculo_Simular_bnt).click()

        cy.intercept(`${Cypress.config('baseUrlApi')}/simulation/1.0.0/minimaldata/inputcalculation`).as('inputcalculation')
        cy.intercept(`${Cypress.config('baseUrlApi')}/simulation/1.0.0/pricing`).as('pricing')        
        cy.intercept(`${Cypress.config('baseUrlApi')}/simulation/1.0.0/calculation/installments`).as('installments')
        cy.intercept(`${Cypress.config('baseUrlApi')}/simulation/1.0.0/minimaldata/inputcalculation`).as('inputcalculationData')
        cy.intercept(`${Cypress.config('baseUrlApi')}/simulation/1.0.0/pricing`).as('pricingData')        
        cy.intercept(`${Cypress.config('baseUrlApi')}/simulation/1.0.0/calculation/installments`).as('installmentsData')

    }

    

}

module.exports = ClienteVeiculoPage