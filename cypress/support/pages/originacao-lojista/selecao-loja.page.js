const Geral = require("../../../fixtures/objs/Geral.json")
const ElementsJson = require("../../elements/elements.json")
const DictionaryJson = require("../../../fixtures/objs/dictionary.json")

class SelecaoLojaPage {
    validateStoreSelectionOpened() {
        cy.screenshot('portal_lojista/SelecaoLojas')
        cy.contains(DictionaryJson.selecaoLoja_textoSelecaoLoja_str)
            .should("be.visible")
        cy.log("Seleção de Lojas - Página de seleção de lojas aberta com sucesso")
    }

    clickSearchField() {
        cy.get(ElementsJson.selecaoLoja_busca_ipt).click()
        cy.log("Seleção de Lojas - Clico no campo de busca")
    }

    fillSearchField() {
        cy.intercept(`${Cypress.config("baseUrlApi")}/merchant-panel/1.0.0/lojas/usuario`).as('lojasEncontradas')
        cy.intercept(`${Cypress.config("baseUrlApi")}/merchant-panel/1.0.0/lojas/usuario`).as('lojasEncontradas2')
        cy.get(ElementsJson.selecaoLoja_busca_ipt).type(Geral.Loja)
        cy.log("Seleção de Lojas - Preencho o campo de busca")
    }

    showList() {
        cy.wait('@lojasEncontradas').then(lojas => {
            cy.get(ElementsJson.SelecaoLoja_ListaLojas_lst).highlight()
            cy.log("Seleção de Lojas - A lista das lojas encontradas é exibida.")
        })
    }

    validateHighlighted() {
        cy.get('span.highlight').then(highlight => {
            for (let i = 0; i < highlight.length; i++) {
                cy.get('span.highlight').eq(i).then($el => {
                    if ($el.text().toString().toLowerCase() != Geral.Loja.toString().toLowerCase()) {
                        throw new Error('Item destacado não coincide com a busca!');
                    }
                })
            }
            cy.log("Seleção de Lojas - Verifico que todos os itens destacados conferem com a busca.")
        })
    }

    validateOrder() {
        const codigoLoja = -1
        cy.wait("@lojasEncontradas2").then(element => {
            if (Cypress.config("environment") == 'HML') {
                cy.decriptarXhr(element.response.body.enc)
                    .then(result => {
                        result.body.lojas.forEach(item => {
                            if (item.cdLoja <= codigoLoja) {
                                throw new Error('Código das Lojas não ordenado corretamente!');
                            }
                        });
                    })
            } else {
                element.response.body.lojas.forEach(item => {
                    if (item.cdLoja <= codigoLoja) {
                        throw new Error('Código das Lojas não ordenado corretamente!');
                    }
                });
            }
        })

        cy.log("Seleção de Lojas - Verifico que as lojas estão ordenadas pelo código da loja.")
        cy.screenshot('portal_lojista/SelecaoLojas')
    }

    selectLoja() {
        cy.contains(ElementsJson.apresentacao_loja_cbx, Geral.Loja).parent({log:false}).click()
        cy.log("Seleção de Lojas - Seleciono a loja desejada.")
    }

    submitSelecaoLojasData() {
        cy.get(ElementsJson.SelecaoLoja_Avancar_btn).click()
        cy.log("Seleção de Lojas - Clico no botão 'Avançar'.")
    }
}

module.exports = SelecaoLojaPage