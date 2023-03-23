let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");
let Taluka = require("../models/Taluka")


let router = express.Router();

router.get("/:districtid", ((req,res)=>{
    let districtid = req.params.districtid;
    // console.log(districtid);
 
    let object = new Taluka();
    object.districtid = req.params.districtid;
    object.list().then(result=>{
        res.end(JSON.stringify({status:"success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data : err}))
    })
}))



module.exports = router;