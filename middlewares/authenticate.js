const jwt=require("jsonwebtoken")
const express=require("express")
require("dotenv").config()
const {userModel}=require("../model/userModel")


function authenticate(req,res,next){
    const token=req.headers?.authorization?.split(" ")[1]

    if(token){
        jwt.verify(token,process.env.jsonKey,async(err, decoded)=> {
            try {
                if(decoded){
                    var _id=decoded["userId"]
                    const user=await userModel.findById(_id)
                    req.body.user=user
                    next()
                }else{
                    res.send({"msg":"Please Log in"})
                }
            } catch (error) {
                console.log(error)
                res.send({"msg":"Please Log in"})
            }
      });
    }else{
        res.send({"msg":"Please Log in"})
    }
    
}


module.exports={authenticate}
