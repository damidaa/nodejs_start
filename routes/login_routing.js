const express = require("express")

const router = express.Router()


router.get('/', (req , res) =>{


   res.render('login.ejs')
})

router.post('/', (req, res)=>{
   console.log(req.body.name)
   console.log(req.body.password)
   return res.redirect('/')
})

module.exports = router