const express = require("express")

const router = express.Router()


router.get('/', (req , res) =>{


    return res.render('index', {name : ["조이서","국연수","구자윤"] ,pilmo : ["이태원클라스","그해우리는","마녀1,2"]})
})

router.post('/', (req, res)=>{

    return res.redirect('/register')
 })


module.exports = router