const mongoose=require("mongoose")

const CartproductSchema=mongoose.Schema({
    productID:{type:String},
    userID:{type:String}
})


const CartproductModel=mongoose.model("cart",CartproductSchema)



module.exports={
    CartproductModel
}