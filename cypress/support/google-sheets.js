const { GoogleSpreadsheet } = require('google-spreadsheet')
const credenciais = require('../fixtures/credentials.json')

const getDoc = async () => {
    const doc = new GoogleSpreadsheet(credenciais.spreadsheetId)
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo()
    return doc
}

Cypress.Commands.add('updateExcel', (proposta, nome) => {    
    getDoc().then(doc => {
        const sheet = doc.sheetsByTitle['AUTO']
        sheet.addRow({
            Ambiente: "PRO",
            Proposta: proposta,
            Nome: nome,            
            Usado: "Não"
        })
    })
})

Cypress.Commands.add('updateExcelDSV', (proposta, nome) => {    
    getDoc().then(doc => {
        const sheet = doc.sheetsByTitle['AUTO']
        sheet.addRow({
            Ambiente: "DSV",
            Proposta: proposta,
            Nome: nome,            
            Usado: "Não"
        })
    })
})