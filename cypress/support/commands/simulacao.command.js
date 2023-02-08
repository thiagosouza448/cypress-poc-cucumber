import { jsonProposta } from '../../fixtures/massas.fixture'

Cypress.Commands.add('postRiskAnalysis', proposta => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: `${Cypress.config('baseUrlApi') }/token`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic azJEMGg5Uno1NGZobVhaazVOSjdfQlMxVjVBYTpGa3RSbWZ6X1JKYWhOYnRpb2ZwNzE4Q1Y3b0Vh'
        },
        body: {
            grant_type: 'client_credentials'
        }
    }).then(({ body }) => {
        jsonProposta.proposal_number = proposta
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: `${Cypress.config('baseUrlApi') }/external-analysis/1.0.0/riskanalysis/externalresponse`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${body.access_token}`
            },
            body: jsonProposta
        }).then(response => {
        })
    })
})

Cypress.Commands.add('postRiskAnalysisPRO', proposta => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config('baseUrlApi') }/token`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic d19vaTFfd2pIS0R3cFFTUkRTSDR2TWt0b2YwYTptV3ZnYkdaUEdNVlU1YW9yT0VOeGhTbDBySlFh'
        },
        body: {
            grant_type: 'client_credentials'
        }
    }).then(({ body }) => {
        jsonProposta.proposal_number = proposta
        cy.request({
            method: 'POST',
            url: `${Cypress.config('baseUrlApi') }/external-analysis/1.0.0/riskanalysis/externalresponse`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${body.access_token}`
            },
            body: jsonProposta
        }).then(response => {
            expect(response.isOkStatusCode).to.be.true
        })
    })
})

Cypress.Commands.add('biometricApproval', () => {
    cy.request({
        method: 'POST',
        url: 'https://brc6autoparam.viverebrasil.com.br/api/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic UlJDSmlYaGcxSkdBRXRfRzR4SmtVOGZNT3ZvYTpBb2xYMXVocU9UQXhvZE5ENFNxZFFXdnN4U29h'
        },
        body: {
            grant_type: 'client_credentials'
        }
    }).then(({ body }) => {
        cy.request({
            method: 'POST',
            url: `https://brc6autoparam.viverebrasil.com.br/api/auto-release/1.0.0/release/validation/approve/proposal/biometry/${jsonProposta.proposal_number}?ambiente=PRO`,
            headers: {
                Authorization: `Bearer ${body.access_token}`
            },
        }).then(response => {
            expect(response.isOkStatusCode).to.be.true
        })
    })
})

Cypress.Commands.add('aprovarPreAnaliseBackoffice', (numProposta) => {
    cy.get(':nth-child(1) > .cursor-point').click()
    cy.get('app-card-area-search > app-card-area > .card > .card-body > [content=""] > form.ng-pristine > .row > .col-md-6 > .form-control').type(numProposta)
    cy.get('form.ng-dirty > .row > .col > .btn').click()
    cy.get('.card-radio').click()
    cy.get('.expand-btn').click()
    cy.get(':nth-child(7) > .btn').click()
    cy.get('.pt-2 > :nth-child(1) > .ng-untouched').click()
    cy.get('.pb-3 > .btn-principal').click()
})