import { generateToken } from "authenticator";
const ElementsJson = require("../../elements/elements.json")

class LoginPagePlatform {
    constructor() {
        this.otp = generateToken(Cypress.config("token_secret"))
    }

    fillUsernameInput() {
        cy.get(ElementsJson.login_usernamePlataform_ipt)
            .type(Cypress.config("username_plataform"))
        cy.log("Login - Preencho campo Username")
    }

    fillPasswordInput() {
        cy.get(ElementsJson.login_pwd_ipt)
            .type(Cypress.config("password"))
        cy.log("Login - Preencho campo senha")
    }

    submitLoginData() {
        cy.screenshot('platform/Login')
        cy.log("Login - Gero o screenshot da tela de Login")
        cy.get(ElementsJson.login_acessar_btn)
            .click()
        cy.log("Login - Clico no botão 'Acessar'")
    }

    validateLoginData() {
        cy.contains("Valide sua identidade")
            .should('be.visible')
        cy.log("Login - Modal do MFA aberto")
    }

    fillTokenMFA() {
        cy.get(ElementsJson.login_tokenMFA_ipt)
            .type(this.otp)
        cy.log("Login - Preencho token MFA")
        cy.screenshot("platform/Login")
    }

    submitTokenMFA() {
        cy.get(ElementsJson.login_validarMFA_btn)
            .click()
        cy.log("Login - Clico no botão 'Validar'")
        cy.waitLoadingDisappear(".spinner")
    }

    startLoginOKTA() {

    }

    fillUsernameInputOKTA() {

    }

    fillPasswordInputOKTA() {

    }

    submitLoginDataOKTA() {

    }

    doLogin() {

    }

    doLoginOKTA() {

    }
}

module.exports = LoginPagePlatform
