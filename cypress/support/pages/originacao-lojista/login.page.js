const ElementsJson = require("../../elements/elements.json")



class LoginPage {
    fillCPFInput() {
        cy.get(ElementsJson.login_cpf_ipt)
            .type(Cypress.config("username"))
        cy.log("Login - Preencho campo CPF")
    }

    fillPasswordInput() {
        cy.get(ElementsJson.login_pwd_ipt)
            .type(Cypress.config("password"))
        cy.log("Login - Preencho campo senha")
    }

    submitLoginData() {
        cy.screenshot('portal_lojista/Login')
        cy.log("Login - Gero o screenshot da tela de Login")
        cy.intercept('POST', `${Cypress.config("baseUrlApi")}/login/1.0.0/clients/login/validation`)
            .as("validacaoLogin")
        cy.get(ElementsJson.login_acessar_btn)
            .highlight()
        cy.log("Login - Clico no botão 'Acessar'")
        cy.get(ElementsJson.login_acessar_btn)
            .click()
        cy.waitLoadingDisappear("p.message-loading")
    }

    validateLoginSuccess() {
        cy.wait("@validacaoLogin")
            .then(data => {
                if (Cypress.config("environment") == 'HML') {
                    cy.decriptarXhr(data.response.body.enc)
                        .then(result => {
                            expect(result.status)
                                .to
                                .equal(200)
                        })
                } else {
                    expect(data.response.statusCode)
                        .to
                        .equal(200)
                }
            })
        cy.waitLoadingDisappear("p.message-loading")
        cy.log("Login - serviço de validação respondeu com sucesso")
    }


    fillUsernameInputOKTA() {
        cy.get(ElementsJson.login_username_okta_ipt)
            .type(Cypress.config("username_okta"))
        cy.log("Login - Preencho campo username")

    }

    fillPasswordInputOKTA() {
        cy.get(ElementsJson.login_password_okta_ipt)
        .type(Cypress.config("password_okta"))
    cy.log("Login - Preencho campo senha")

    }

    submitLoginDataOKTA() {
        cy.get(ElementsJson.login_okta_btn_sign)
        .highlight()
        cy.log("Login - Clico no botão 'Acessar'")
        cy.get(ElementsJson.login_okta_btn_sign)
        .click()
        
        cy.screenshot('portal_lojista/Login')
        cy.log("Login - Gero o screenshot da tela de Login")
        cy.intercept('POST', `${Cypress.config("baseUrlApi")}/login/1.0.0/clients/login/validation`)
            .as("validacaoLogin")
        cy.waitLoadingDisappear("p.message-loading")

        
    }

    

      validadeModalOkta() {
        cy.get(ElementsJson.modal_okta).should('be.visible')
    }

}

module.exports = LoginPage