let Database = require("./Database");

class Taluka {

    constructor(){
        this.name = "";
        this.sql = "";
        this.districtid = 0;
        this.db = new Database();
    }
    
    list(){
        this.sql = `SELECT * FROM talukas WHERE districtid =  ${this.districtid}`
        return new Promise((resolve,reject)=>{
                this.db.query(this.sql).then(result=>{
                    resolve(result)
                }).catch(err=>{
                    reject(err)
                })
        })
    }
}

module.exports = Taluka;