const mongoose=require("mongoose")
require('dotenv').config()

const connectionDB = async()=>{
    try {
       const connection= await mongoose.connect(process.env.MongoURL)
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    connectionDB
}