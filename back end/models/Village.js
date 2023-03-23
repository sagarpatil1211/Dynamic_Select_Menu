let Database = require("./Database");

class Village {

    constructor(){
        this.name = "";
        this.sql = "";
        this.talukaid = 0;
        this.db = new Database();
    }
    
    list(){
        this.sql = `SELECT * FROM villages WHERE talukaid = ${ this.talukaid}`
        return new Promise((resolve,reject)=>{
                this.db.query(this.sql).then(result=>{
                    resolve(result)
                }).catch(err=>{
                    reject(err)
                })
        })
    }
}

module.exports = Village;