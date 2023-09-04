const express = require("express")

const router = express.Router()


router.get('/', (req , res) =>{


   res.render('register.ejs')
})

router.post('/', (req, res)=>{
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.phone)
    console.log(req.body.password)
    return res.redirect('/login')
})

module.exports = router