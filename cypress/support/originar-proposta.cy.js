describe('AUTO', () => {
        it('Gerando proposta ', () => {
            
            cy.login(Cypress.config('username'), Cypress.config('password'))
            cy.contains(ElementsJson.apresentacao_loja_cbx, Cypress.env('Geral').Loja).click()
            cy.contains('Avançar').click()
            cy.contains('Criar uma nova proposta').click()
    
            cy.contains('h1', 'Dados do cliente e veículo').should('be.visible')
            cy.get(ElementsJson.home_cpf_ipt).type(Cypress.env('Cliente').CPF)
            cy.contains('Simular').click()
            cy.intercept('**/summary/pre-analysis').as('passouSimulacao')
            cy.wait('@passouSimulacao', {timeout: 60000})
            cy.intercept('POST', '**/installments').as('calculadoraRodou')
            cy.get('.max-marker').click()
            cy.scrollTo('bottom')
            cy.contains('h1', ' Configurações adicionais de simulação').should('be.visible')
            cy.wait('@calculadoraRodou').its('response.statusCode').should('eq', 200)
            cy.wait(5000)
            cy.get('mat-select[formControlName=formaDePagamento]').click()
            cy.window().scrollTo(0,1150)
            cy.get('mat-option').contains('BOLETO').click()
            cy.intercept('POST', '**/proposal/cpf').as('cpf')
            cy.contains('Avançar').click()
    
            cy.wait('@cpf', { timeout: 120000 })
            cy.contains('h1', 'Dados adicionais do cliente').should('be.visible')
            cy.get('[name="nome"]').type(`{selectall}{backspace}${Cypress.env('Cliente').NomeCompleto}`)
            cy.get('[name="email"]').type(`{selectall}{backspace}${Cypress.env('Cliente').Email}`)
            cy.clickComboOption('Nome do agente', Cypress.env('Geral').NomeAgente)
            cy.intercept('POST', '**/summary/proposal/').as('proposta')
            cy.contains('Finalizar cadastro').click()
            cy.wait(10500)
            cy.wait('@proposta').then(({response}) => {
                cy.postRiskAnalysis(response.body.proposal.id)
                Cypress.config('proposalNumber',response.body.proposal.id)
                cy.postRiskAnalysis(response.body.proposal.id)
                cy.postRiskAnalysis(response.body.proposal.id)
                cy.postRiskAnalysis(response.body.proposal.id)
                cy.postRiskAnalysis(response.body.proposal.id)
            })
            cy.contains('Crédito aprovado').should('be.visible')
            cy.contains('Avançar para formalização').click()

            //A PARTIR DAQUI É FORMALIZAÇÃO
            
            cy.contains('h1', 'Dados adicionais do veículo').should('be.visible')
            cy.get('[formcontrolname="chassi"]').type(Cypress.env('Veiculo').Chassi + '00{backspace}{backspace}', { delay: 400})
            cy.get('[formcontrolname="placa"]').type(Cypress.env('Veiculo').Placa )
            cy.clickComboOption('UF da placa', Cypress.env('Veiculo').UF )
            cy.clickComboOption('Ano Fabricação', '2021')
            cy.get('[formcontrolname="renavam"]').type(Cypress.env('Veiculo').Renavam)
            cy.get('[formcontrolname="corDoVeiculo"]').type(Cypress.env('Veiculo').Cor)
            cy.clickComboOption('Lataria', Cypress.env('Veiculo').Lataria)
            cy.clickComboOption('Tapeçaria',Cypress.env('Veiculo').Tapecaria )
            cy.clickComboOption('Pintura', Cypress.env('Veiculo').Pintura)
            cy.clickComboOption('Pneus', Cypress.env('Veiculo').Pneus)
            cy.contains('Avançar').click()
            
            cy.contains('h1', 'Envio de documentação do veículo').should('be.visible')
            cy.get('.card-wrapper').each($card => {
                cy.wrap($card).find('[type=file]').attachFile('placa.jpg')
                cy.wrap($card).find('img').should('be.visible')
            })
            cy.contains('Avançar').click()
            
            cy.contains('h1', 'Envio de documentação do cliente').should('be.visible')
            cy.get('.card-wrapper').each($card => {
                cy.wrap($card).find('[type=file]').attachFile('cnh.jpg')
                cy.wrap($card).find('img').should('be.visible')
            })
            cy.contains('Avançar').click()
    
            cy.contains('h1', 'Contrato e biometria').should('be.visible')
            cy.carregaBiometria()            
            cy.intercept('POST', '**/proposal/*').as('propostapronta')
            cy.reload()
            cy.wait('@propostapronta')
            cy.wait(5000)
            cy.contains('h1', 'Download de documentos').should('be.visible')
            cy.intercept('GET', '**/bancos*').as('bancosCarregados')
            cy.contains('Avançar').click()
            cy.wait('@bancosCarregados', { timeout: 60000 })
            cy.wait(3000)
            cy.contains('h1', 'Dados de pagamento').should('be.visible')
            cy.clickComboOption('Banco',Cypress.env('Geral').Banco)
            cy.intercept('POST', '**/payment?proposalId=*').as('sucesso')
            cy.contains('Finalizar proposta').click()
            cy.wait('@sucesso').then(({response}) => {
                cy.updateExcelDSV(response.body[0].proposalId, Cypress.env('Cliente').NomeCompleto)
                cy.contains('h2', 'Falta pouco').should('be.visible')
                cy.screenshot()
                cy.contains('Acompanhar status da proposta').click()
            })
        })
})
