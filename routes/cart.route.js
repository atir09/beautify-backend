const express = require("express")
const mongoose = require("mongoose")
const {  CartproductModel } = require("../model/cart.model")

const CartproductsRoute = express.Router()



CartproductsRoute.get("/:id",async(req,res)=>{
    const id=req.params.id
    try {
        const products=await CartproductModel.find({userID:id})
        res.send({"msg":"Cart Data","products":products})
    } catch (error) {
        console.log(error)
    }
})

CartproductsRoute.post("/",async(req,res)=>{
    const {userID,productID}=req.body
    try {
        const product=new CartproductModel({userID,productID})
        await product.save()
        res.send({"msg":"Added to cart"})
    } catch (error) {
        console.log(error)
    }
})