// require express again instead of app
const express = require('express')
const authController = require('../controllers/auth.controllers')


const router = express.Router()

// '/api/auth/register'
router.post('/register', authController.registerUser)

router.get('/test', (req,res)=>{

    console.log("cookies: ", req.cookies)

    res.json({
        "message" : "Test route",
        "cookies" : req.cookies
    })
    
})

module.exports = router