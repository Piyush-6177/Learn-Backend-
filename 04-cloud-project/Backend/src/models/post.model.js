const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image : String, // url
    caption : String 
})

// 1st argument (post) is a collection
// 2nd is the schema to be used there
const postModel = mongoose.model("post", postSchema) 

module.exports = postModel