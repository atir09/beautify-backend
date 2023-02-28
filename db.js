const mongoose=require("mongoose")
require('dotenv').config()

const connectionDB = async()=>{
    try {
       const connection= await mongoose.connect(process.env.MongoURL)
       console.log("Connect to DB")
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    connectionDB
}