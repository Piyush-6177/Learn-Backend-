const mongoose = require('mongoose')

async function connectDB(){
    // connects server to the DB
    await mongoose.connect(process.env.MONGO_URI)

    console.log("Connected to DB")
    
}

module.exports = connectDB