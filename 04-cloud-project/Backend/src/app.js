const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const cors = require('cors')

const app = express()   // instance 
// app.use(express.json()) -> doesn't work with form-data format 

app.use(cors())

const upload = multer({storage : multer.memoryStorage()})

// .single() >> Returns middleware that processes a single file associated with the
//  given form field
app.post("/create-post",upload.single('image'), async (req,res)=>{

    // console.log(req.body) // undefined
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    // console.log(result)

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption
    })

    res.status(201).json({
        message : "Post Created",
        post : post
    })  
}) 

app.get("/posts", async(req,res)=>{

    const posts = await postModel.find()

    res.status(200).json({
        message : "Posts fetched successfully",
        posts : posts
    })
})

module.exports = app