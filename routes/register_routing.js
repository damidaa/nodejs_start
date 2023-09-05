const express = require("express")

const User = require("../utils/usermodel")

const router = express.Router()

const mongoose = require("mongoose")

const bcrypt = require("bcrypt")

router.get('/', (req , res) =>{


   res.render('register.ejs', {user: 'guest'})
})

router.post('/', async (req, res)=>{
    username = req.body.name
    phone = req.body.phone
    email = req.body.email
    password = req.body.password

    const salt  = 10
    const encryptedPassowrd = bcrypt.hashSync(password, salt) // sync
    console.log(encryptedPassowrd)
    
    
    const user = new User({
        username : username,
        email : email,
        phone : phone,
        password : encryptedPassowrd   
    })

    let result = await User.findOne({ email: email});
    console.log(result)

    if (result != null){
        res.render('register.ejs', {user:'exist'})
    }
    else {
        user.save()
        .then((result) => console.log(`Saved successfully result : ${result}`))
        .catch(e => console.error(e));
        res.redirect('/login')
    }


    // user.save()
    // .then((result) => console.log(`Saved successfully result : ${result}`))
    // .catch(e => console.error(e));
    
    
    // try {
    //     let result = await user.save()
    //     await console.log(`Saved succesfully result: ${result}`)
    //     await res.redirect('/')
    // } catch (error) {
    //     console.log(error);
    //     return res.redirect('/register')
    // }
     
})
module.exports = router