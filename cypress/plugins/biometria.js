const Client = require('pg')
const fileReader = require('fs')

const loadBiometria = ambiente => {

    const querys = [
        `update prt_proposta set cd_etapa_forml = \'5\', dh_appkey = current_timestamp, st_result_biometria = \'A\' where id_proposta in (${ambiente.proposalNumber});`,
        `insert into prt_dspvo_info_log values (nextval(\'seq_prt_dspvo_info_log\'),${ambiente.proposalNumber},null,\'Cliente\',\'Biometria / liveness\',\'201.74.250.131\',\'-22.7303338\',\'-47.6660006\',null,\'Windows\',\'Chrome\',\'93.0.4577.82\',\'000000000100000000070540173070\',current_timestamp);`,
        `select id_proposta, id_check_list from prt_check_list pcl where id_proposta in (${ambiente.proposalNumber}) and id_documento = 161;`,
        `insert into prt_biometria values (nextval(\'seq_prt_biometria\'),${ambiente.proposalNumber},\'202100099198\',current_timestamp,\'PROVA DE VIDA\',false,\'\',null,\'300.2\',null,\'admin@carbon.super\',current_timestamp);`
    ]

    const client = new Client.Client({
        user: ambiente.dbUser,
        host: ambiente.dbHost,
        database: ambiente.dbName,
        password: ambiente.dbPwd,
        port: ambiente.dbPort,
        ssl: {
        rejectUnauthorized: false,
        ca: fileReader.readFileSync(__dirname +'\\' + ambiente.certName).toString(),
        },
    });
    
    client.connect().then(()=> {
        client.query(querys[0]).then(()=>{
            client.query(querys[1]).then(()=>{
                client.query(querys[2]).then(res => {
                    const rows = res.rows;
                    rows.map(row => {
                        console.log(`Read: ${JSON.stringify(row)}`);
                        client.query(`insert into img_artefato_ecm values (nextval('seq_img_artefato_ecm'),161,'b8a96520-985c-4ea9-a5cd-0234a679c323','.jpeg','6830022a-db48-44e8-b816-853d11a884ec.jpeg','master',current_timestamp,${row.id_check_list});`)
                    })

                    client.query(querys[3]).then( () => {
                        client.end()
                    })
            
                })
                .catch(err => {
                    console.log(err);
                })
            })
        })
    })
    return null
}


module.exports = {
    loadBiometria
}