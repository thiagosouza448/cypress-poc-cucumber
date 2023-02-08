/// <reference types="cypress" />

describe('AUTO', () => {
    Cypress._.times(1, index => {
        it('Testando calculo reverso', () => {
            cy.login_platform(Cypress.config('username_plataform'), Cypress.config('password_plataform'))
            cy.aprovarPreAnaliseBackoffice(5308)
        })
    })
})