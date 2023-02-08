/// <reference types="cypress" />

const { cypressConfigResolver } = require('../config/cypress-config-resolver')
const cucumber = require('cypress-cucumber-preprocessor').default
const xlsx = require('../plugins/read-xlsx')
const biometria = require('../plugins/biometria')

module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on)

    on('task', {'excelFile': xlsx.read})

    on('file:preprocessor', cucumber())

    on('task', {'querysBiometria': biometria.loadBiometria})

    return cypressConfigResolver()
}


