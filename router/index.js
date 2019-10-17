var express=require("express");
var router=express.Router();

router.get("/",(req,res)=>{
    res.send("OK1");
})
router.get("/info",(req,res)=>{
    res.send("OK2");
})

module.exports=router;