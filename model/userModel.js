const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true},
})


const userModel=mongoose.model("user",userSchema)
const adminModel=mongoose.model("admin",userSchema)


module.exports={
    userModel,adminModel
}
