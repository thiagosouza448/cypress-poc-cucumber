import './commands'
import './commands/login.command'
import './commands/simulacao.command'
import './commands/uploadDocumentos.command'
import './google-sheets'
import 'cypress-mochawesome-reporter/register'
import './load'
require('cypress-xpath') 

const filePath = 'cypress/fixtures/objs/LoadData2Test.xlsx'
const sheets = ['Geral', 'Veiculo', 'Cliente']

before(() => {
    cy.inicializacao(filePath, sheets)
})

// Hide all fetch/XHR requests in Cy console, toggle via cypress.json
if (Cypress.config('hideXHR')) {
    const app = window.top

    if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
        const style = app.document.createElement('style')
        style.innerHTML =
        '.command-name-page-load, .command-name-new-url, .command-name-request, .command-name-xhr, .command-name-assert { display: none }'
        style.setAttribute('data-hide-command-log-request', '')
        app.document.head.appendChild(style)
    }
}