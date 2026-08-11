const express = require('express')

const app = express()   // instance created 

app.use(express.json()) // middleware that helps express read the data that was sent in raw format 


const notes = []

app.post("/notes", (req,res)=>{
    // console.log(req.body)
    notes.push(req.body) // resource created i.e. notes 

    // 201 >> indicates successful resource creation on the server 
    res.status(201).json({
        message: "note created successfully"
    })
})

app.get("/notes", (req,res)=>{
    // 200 > Request successful... The server has responded as required
    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes 
    })
})

app.delete("/notes/:index",(req,res)=>{

    const index = req.params.index // 0,1,2,...
    
    delete notes[index]

    res.status(200).json({
        message : "note deleted successfully"
    })

})

app.patch("/notes/:idx",(req,res)=>{

    const index = req.params.idx
    const descrip = req.body.description

    notes[index].author = descrip
    

    res.status(200).json({
        message : "description updated successfully"
    })

})

module.exports = app