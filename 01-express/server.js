const express = require('express')

const app = express()   // creating server instance and saving it in 'app'

app.get("/", (req,res) => {     // req >> to access any data from frontend
    res.send("Hello World")     // res >> to send any data/response to frontend 
})

app.get("/about", (req,res) => {
    res.send("About Page")
})




app.listen(3000, () => {
    console.log("server is running at port : 3000") // for starting server 
    
})
