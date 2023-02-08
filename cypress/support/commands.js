Cypress.Commands.add('clickComboOption', (field, text, index = 0) => {
    cy.get(`mat-label:contains(${field})`).eq(index, {log: false}).parents(2, {log: false}).siblings('mat-select', {log: false}).find('.mat-select-arrow', {log: false}).click()
    cy.contains('.mat-option-text', text).click()
})

Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => new Cypress.Promise(resolve => {
    $iframe.on('load', () => {
        resolve($iframe.contents().find('body'));
    })
}))

Cypress.Commands.add('highlight', { prevSubject: 'element' }, $el => $el.css('border', '2px solid red'))

Cypress.Commands.overwrite('type', (originalFn, subject, text, options) => {
    options == undefined ? options = {log: false} : options.log = false
    const clearedText = `{selectall}{backspace}${text}`
    cy.wrap(subject)
        .focus().highlight()
        .scrollIntoView({log: false }).then(() => originalFn(subject, clearedText, options))
})

Cypress.Commands.overwrite('click', (originalFn, subject, ...args) => {
    args[0] == undefined ? args[0] = {log: false} : args[0].log = false
    cy.wrap(subject).highlight().scrollIntoView({log: false }).then(() => originalFn(subject, ...args))
})

Cypress.Commands.overwrite('get', (originalFn, ...args) => {
    args[1] == undefined ? args[1] = {log: false} : args[1].log = false
    return originalFn(...args)
})

Cypress.Commands.overwrite('wrap', (originalFn, subject, options) => {
    options == undefined ? options = {log: false} : options.log = false
    return originalFn(subject, options)
})

Cypress.Commands.overwrite('wait', (originalFn, alias, time, options) => {
    options == undefined ? options = {log: false} : options.log = false
    return originalFn(alias, time, options)
})

Cypress.Commands.overwrite('contains', (originalFn, subject, ...args) => {
    args[2] == undefined ? args[2] = {log: false} : args[2].log = false
    cy.wrap(subject).then(() => originalFn(subject, ...args))
})


Cypress.Commands.overwrite('focus', (originalFn, subject, ...args) => {
    args[0] == undefined ? args[0] = {log: false} : args[0].log = false
    cy.wrap(subject).highlight().then(() => originalFn(subject, ...args))
})

Cypress.Commands.overwrite('screenshot', (originalFn, ...args) => {
    args[2] == undefined ? args[2] = {log: false} : args[2].log = false
    return originalFn(...args)
})

Cypress.Commands.overwrite('check', (originalFn, subject, ...args) => {
    args[0] == undefined ? args[0] = {log: false} : args[0].log = false
    return originalFn(subject, ...args)
})

Cypress.Commands.overwrite('select', (originalFn, subject, ...args) => {
    args[0] == undefined ? args[0] = {log: false} : args[0].log = false
    return originalFn(subject, ...args)
})

Cypress.Commands.overwrite('eq', (originalFn, ...args) => {
    args[2] == undefined ? args[2] = {log: false} : args[2].log = false
    return originalFn(...args)
})

Cypress.Commands.add('waitLoadingDisappear', element => {
    cy.get(element,{timeout : 120000}).should('not.exist')
})

Cypress.Commands.add('carregaBiometria', () => {
    cy.fixture(`${Cypress.config('environment').toLowerCase()}.json`).then(cfgs => {
        const resp = {
            dbUser: cfgs.dbUser,
            dbHost: cfgs.dbHost,
            dbName: cfgs.dbName,
            dbPwd: cfgs.dbPwd,
            dbPort: cfgs.dbPort,
            certName: cfgs.certName,
            proposalNumber: cfgs.proposalNumber,
        }
        cy.task('querysBiometria', resp)
    })
})

Cypress.Commands.add('decriptarXhr', enc => cy.request({
    url: 'https://brc6autodsv.onefinancial.com.br/cipher-helper/decript',
    body: {
        decriptString: enc,
        cip: "21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36"
    }
}))