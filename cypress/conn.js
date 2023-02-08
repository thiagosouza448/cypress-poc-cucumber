const { Client } = require("pg");
const fileReader = require("fs");
let queryString = ''

class connect {
    constructor(options) {

        const client = new Client({
            user: options.dbUser,
            password: options.dbPwd,
            host: options.dbHost,
            database: options.dbName,
            port: options.dbPort,
            ssl: {
                rejectUnauthorized: false,
                ca: fileReader.readFileSync(__dirname + options.certName).toString(),
            }
        });
        this.client.connect();
        return this;
    }
}
    
class update {
    constructor(data) {
        const $where = data.where = '' ? '' : "where " + data.where;
        queryString = `update ${data.table} set ${data.fields} ${$where};`;
        console.log(`QueryString = ${queryString}`)
        //return this.client.query(queryString)
         return queryString
    }
} 

class insert {
    constructor(data){
        queryString = `insert into ${data.table} values ${data.fields};`;
        console.log(`QueryString = ${queryString}`)
        return queryString
        //return this.client.query(queryString)
    }
}

class select{
    constructor(data){
        const $where = data.where = '' ? '' : "where " + data.where;
        queryString = `select ${data.fields} from ${data.table} ${$where};`;
        return queryString
        //return this.client.query(queryString);
    }
}

class close {
    constructor(){
        this.client.end();
        return this;
    }
}

module.exports = {
    connect, update, insert, select, close
}