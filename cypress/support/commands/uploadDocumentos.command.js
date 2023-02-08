const DIVS_DOCUMENTS = 'div[class*=documentos]'
const DIVS_DOCUMENT_ITEM = '.accordion-content'
const BTN_UPLOAD = '.upload-documento'
const CANVAS_PDF = '.pdf-content canvas'

Cypress.Commands.add('getDocument', index => {
    return cy.get(DIVS_DOCUMENT).eq(index)
})

Cypress.Commands.add('uploadPDF', { prevSubject: 'element' }, ($el, fileName, docIndex) => {
    cy.wrap($el).find(DIVS_DOCUMENT_ITEM).eq(docIndex).find(BTN_UPLOAD).click()
    cy.fixture(fileName, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent,
                fileName,
                mimeType: 'application/pdf',
                encoding:'utf8'
            })
        })
    cy.get(CANVAS_PDF).should('have.attr', 'height')
})