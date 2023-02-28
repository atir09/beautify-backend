const express = require("express")
const mongoose = require("mongoose")
const {  productModel } = require("../model/productModel")
const { userModel } = require("../model/userModel")

const productsRoute = express.Router()

productsRoute.get("/", async(req,res)=>{
    
        try {
            let data= await productModel.find()
            res.send({"products":data})
        } catch (error) {
            console.log(error)
        }

    
})


productsRoute.get("/:id", async(req,res)=>{
    let id=req.params.id
    if(id){
        try {
            let data= await productModel.findById(id)
            res.send({"products":data})
        } catch (error) {
            console.log(error)
        }
    }else{
        try {
            let data= await productModel.find()
            res.send({"products":data})
        } catch (error) {
            console.log(error)
        }
    }
    
})


productsRoute.post("/add",async(req,res)=>{
    const{title,brand,price,category,img}=req.body
    try {
        let product=new productModel({title,brand,price,category,img}) 
        await product.save()
        res.send({"msg":"Product Added"})
    } catch (error) {
        console.log(error)
    }
})



productsRoute.patch("/update/:id",async(req,res)=>{
    const productID=req.params.id
    const payload=req.body
    try {
        await productModel.findByIdAndUpdate(productID,payload)
        res.send({"msg":"Product Updated Successfully"})
    } catch (error) {
        console.log(error)
    }
})

productsRoute.delete("/delete/:id",async(req,res)=>{
    const productID=req.params.id
    try {
        await productModel.findByIdAndDelete(productID)
        res.send({"msg":"Product Deleted Successfully"})
    } catch (error) {
        console.log(error)
    }
})


productsRoute.get("/category",async(req,res)=>{
    c1=req?.query?.c1
    try {
        
    } catch (error) {
        
    }
})


module.exports={
    productsRoute
}