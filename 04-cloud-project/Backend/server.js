require('dotenv').config()  // to access keys from .env (kept at top)
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB() // establish connection with the database 


app.listen(3000,()=>{
    console.log("Server is running on port : 3000");  
})