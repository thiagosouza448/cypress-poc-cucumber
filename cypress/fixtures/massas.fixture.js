export const dados = {
    cliente: {
        nascimento: '31/12/1996',
        email: 'lucas@putsbox.com',
        telefone: '11992222442'
    },
    clienteIncorreto: {
        cpf: '11111111111',
        nome: 'Teste',
        nascimento: '19/09/1940',
        email: 'a@a.a',
        telefone: '11111222442',
        renda: '0,10-'
    },
    outroParticipante: {
        nome: 'Outro part automação',
        cpf: '23434227539',
        nascimento: '19/09/1980',
        renda: '10000,00'
    },
}

export const jsonProposta = {
    proposal_number: "4789",
    return_code: "CA",
    return_message: "string",
    approved_credit_amount: 10000.0,
    approved_montly_payment: 10000.0,
    approved_term_length: 100000.0,
    approved_timestamp: "2022-03-22 09:15:40.000",
    int_return_message:"Oiiii teste interno 1 Vamos ver se aparece certinho para o usuário: Tivemos problemas para aprovar a prosta. Cliente não tem crédito suficiente.",
    ext_return_message:"teste externo. Teste teste 123456666. Teste"
}