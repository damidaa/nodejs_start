const express = require("express")

const router = express.Router()


router.get('/', (req , res) =>{


   res.render('index_dami', {name : ["조이서","국연수","구자윤"] ,pilmo : ["이태원클라스","그해우리는","마녀1,2"]})
})


module.exports = router