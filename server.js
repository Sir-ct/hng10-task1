require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const PersonSchema = require("./models/PersonSchema")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/api/:user_id", async (req, res)=>{
    try{
        let person = await PersonSchema.findOne({name: req.params.user_id})
        if(!person) return res.status(404).json({success: false, message: "Person not found"})

        return res.status(200).json({success: true, message: "Person found", data: person})
    }catch(err){
        console.log(err.message);
        return res.status(400).json({success: false, message: err.message})
    }
    
})

app.post("/api", async (req, res)=>{

    if(!req.body.name || req.body.name == ""){
        return res.status(400).json({success: false, message: "name field is required"})
    }
    try{
        let person = await PersonSchema.findOne({name: req.body.name})
        if(person) return res.status(400).json({success: false, message: "User already exists"})

        person = await new PersonSchema(req.body).save()
        return res.status(201).json({success: true, message: "Person created successefully", data: person})
    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "An error occured"})
    }
    
})

app.put("/api/:user_id", async(req, res)=>{
    if(!req.body.name || req.body.name === ""){
        return res.status(400).json({success: false, message: "name is required"})
    }
    try{
        let person = await PersonSchema.findOneAndUpdate({name: req.params.user_id}, req.body)
        if(!person) return res.status(404).json({success: false, message: "Person does not exist"})

        person = await PersonSchema.findOne({name: req.body.name})
        return res.status(200).json({success: true, message: "Person edited successfully", data: person})
    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message:"An error occured"})
    }
})

app.delete("/api/:user_id", async(req, res)=>{
    try{
        let person = await PersonSchema.findOneAndDelete({name: req.params.user_id})
        if(!person) return res.status(404).json({success: false, message: "Person does not exist"})
        
        return res.status(200).json({success: true, message: "Person deleted successfully", data: person})
    }catch(err){
        console.log(err.message)
        return res.status(500).json({success: false, message: "An error occured"})
    }
})

app.listen(5001, async ()=>{
    await mongoose.connect(process.env.DB_STRING).then(()=>{
        console.log('database connected')
    })
    console.log("server listening on port " + 5001);
})