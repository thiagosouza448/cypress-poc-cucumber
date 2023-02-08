import { defineParameterType } from 'cypress-cucumber-preprocessor/steps'

defineParameterType({
    name: 'bool',
    regexp: /true|false/,
    transformer: s => (s === 'true' ? true : false)
})