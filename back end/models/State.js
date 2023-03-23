let Database = require("./Database");

class State {

    constructor(){
        this.name = "";
        this.sql = "";
        this.db = new Database();
    }
    
    list(){
        this.sql = `SELECT * FROM states`
        return new Promise((resolve,reject)=>{
                this.db.query(this.sql).then(result=>{
                    resolve(result)
                }).catch(err=>{
                    reject(err)
                })
        })
    }
}

module.exports = State;