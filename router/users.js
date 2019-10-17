var express=require("express");
var router=express.Router();

router.get("/",(req,res)=>{
    res.send("users1");
})
router.get("/info",(req,res)=>{
    res.send("users2");
})

module.exports=router;