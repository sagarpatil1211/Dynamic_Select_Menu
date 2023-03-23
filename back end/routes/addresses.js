let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");
let Address = require("../models/Address")


let router = express.Router();

router.get("/", ((req,res)=>{
    let object = new Address();
    let body = req.body;
    object.list().then(result=>{
        res.end(JSON.stringify({status:"success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data : err}))

    })
}))



module.exports = router;