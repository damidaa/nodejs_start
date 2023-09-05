const express = require("express")

const User = require("../utils/usermodel")

const router = express.Router()

const mongoose = require("mongoose")

const bcrypt = require("bcrypt")

router.get('/', (req , res) =>{


   res.render('register.ejs')
})

router.post('/', (req, res)=>{
    username = req.body.name
    phone = req.body.email
    email = req.body.phone
    password = req.body.password

    const salt  = 10
    const encryptedPassowrd = bcrypt.hashSync(password, 10) // sync
    console.log(encryptedPassowrd)
    const user = new User({
        username : username,
        email : email,
        phone : phone,
        password : encryptedPassowrd   
    })

    user.save()
    .then((result) => console.log(`Saved successfully result : ${result}`))
    .catch(e => console.error(e));

    return res.redirect('/login') 
})

module.exports = router