let Database = require("./Database");

class District {

    constructor(){
        this.name = "";
        this.sql = "";
        this.stateid = 0;
        this.db = new Database();
    }
    
    list(){
        this.sql = `SELECT * FROM districts WHERE stateid = ${this.stateid}`
        return new Promise((resolve,reject)=>{
                this.db.query(this.sql).then(result=>{
                    resolve(result)
                }).catch(err=>{
                    reject(err)
                })
        })
    }
}

module.exports = District;