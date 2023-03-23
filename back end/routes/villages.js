let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");
let Village = require("../models/Village")


let router = express.Router();

router.get("/:talukaid", ((req,res)=>{
    let talukaid = req.params.talukaid;
    // console.log(talukaid);
 
    let object = new Village();
    object.talukaid = req.params.talukaid;
    object.list().then(result=>{
        res.end(JSON.stringify({status:"success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data : err}))
    })
}))



module.exports = router;