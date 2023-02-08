const INPUT_USUARIO = '#cpf'
const INPUT_USUARIO_PLATFORM = '#username'
const INPUT_SENHA = '#password'
const BTN_ACESSAR = '#submit-button'
const BTN_ACESSAR_DOIS = '.button-default'

Cypress.Commands.add('login', (user, pass) => {
    cy.visit('/login')
    cy.get(BTN_ACESSAR).click()
    cy.get(INPUT_USUARIO).type(user)
    cy.get(INPUT_SENHA).type(pass)
    cy.get(BTN_ACESSAR_DOIS).click()
 })

 Cypress.Commands.add('login_platform', (user, pass) => {
    cy.visit("/platform/login")
    cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
    cy.get('.btn-submit').click()
    cy.get('#okta-signin-username').type(user)
    cy.get('#okta-signin-password').type(pass)
    cy.get('#okta-signin-submit').click()
 })


 