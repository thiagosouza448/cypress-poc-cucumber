Cypress.Commands.add('inicializacao', (fileName, sheets) => {

    sheets.forEach(element => {
        cy.task('excelFile', { file: fileName, sheet: element }, {log: false})
            .then(rows => {
                if (rows === null) return cy.wrap(false)
                cy.writeFile(`cypress/fixtures/objs/${element.replace(/\s/g, '')}.json`,rows[0])
            })
    })

    Cypress.env('dadosProposta', {})
    return cy.wrap(true)
})