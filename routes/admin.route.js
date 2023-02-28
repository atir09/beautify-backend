
const express = require("express")
const mongoose = require("mongoose")
const { adminModel } = require("../model/userModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const adminRoute = express.Router()


adminRoute.post("/adminLogin", async (req, res) => {
    const { email, password } = req.body
    try {
        const admin = await adminModel.find({ email })
        if (admin?.length > 0) {
            if (password == admin[0]["password"]) {
                var token = jwt.sign({ adminId: admin[0]["_id"] }, process.env.jsonKey)
                res.send({ "msg": "Login Successful","token":token })
            } else {
                res.send({ "msg": "Invalid Credentials" })
            }
        } else {
            res.send({ "msg": "Email Not Registered,Please Sign Up" })
        }
    } catch (error) {
        console.log(error)
        res.send({ "msg": "Unable to log in" })
    }
})


module.exports = {
    adminRoute
}