const express = require('express')
const noteModel = require("./models/note.model")


const app = express()   // server instance 
app.use(express.json()) // middleware 

// notes = {title,description}

app.post("/notes",async (req,res)=>{

    const data = req.body

    await noteModel.create({
        title : data.title,
        description : data.description
    })

    res.status(201).json({
        message : "Note created"
    })
})

app.get("/notes",async(req,res)=>{

    const notes = await noteModel.find() // [] 
    // const notes = await noteModel.findOne({
    //     title : "The Theory of Everything"
    // })

    // find >> [{},{},..] or []
    // findOne >> {} or null 

    res.status(201).json({
        message : "notes fetched successfully",
        notes : notes
    })
})

app.delete("/notes/:id", async (req,res)=>{

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch("/notes/:id",async (req,res)=>{

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id}, {
        description : description
    })

    res.status(200).json({
        message : "note updated successfully"
    })
})


module.exports = app