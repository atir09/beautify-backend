const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:{type:String ,required:true},
    brand:{type:String,required:true},
    price:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:String,required:true}
})


const productModel=mongoose.model("product",productSchema)



module.exports={
    productModel
}