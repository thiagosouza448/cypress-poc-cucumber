const DbConnect = require('../conn')

const loadBiometria = (ambiente) => {

    let param = {
        table : 'prt_proposta',
        fields : 'cd_etapa_forml = "5", dh_appkey = current_timestamp, st_result_biometria = "A"', 
        where : `id_proposta in (${ambiente.proposalNumber})`
    }

    let update = new DbConnect.update(param)
    console.log(update)

    param = {
        table : 'prt_dspvo_info_log',
        values : `(nextval('seq_prt_dspvo_info_log'),${ambiente.proposalNumber},null,'Cliente','Biometria / liveness','201.74.250.131','-22.7303338','-47.6660006',null,'Windows','Chrome','93.0.4577.82','000000000100000000070540173070',current_timestamp)`
    }

    //let insert = new DbConnect.insert(param)
    //console.log(insert)

    param = {
        table: 'prt_check_list',
        fields: 'id_proposta, id_check_list',
        where : `id_proposta in (${ambiente.proposalNumber}) and id_documento = 161;`
    }

    //let select = new DbConnect.select(param)
    //console.log(select)

    param = {
        table : 'prt_biometria',
        values : `(nextval(\'seq_prt_biometria\'),${ambiente.proposalNumber},\'202100099198\',current_timestamp,\'PROVA DE VIDA\',false,\'\',null,\'300.2\',null,\'admin@carbon.super\',current_timestamp);`
    }

    //insert(param)
    //console.log(insert)

    return true
}

module.exports = {
    loadBiometria,
}