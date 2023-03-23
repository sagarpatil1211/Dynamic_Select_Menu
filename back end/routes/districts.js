let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");
let District = require("../models/District")


let router = express.Router();

router.get("/:stateid", ((req,res)=>{
    let stateid = req.params.stateid;
    // console.log(stateid);
 
    let object = new District();
    object.stateid = req.params.stateid;
    object.list().then(result=>{
        res.end(JSON.stringify({status:"success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data : err}))
    })
}))



module.exports = router;