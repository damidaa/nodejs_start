const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const User = require("../utils/usermodel")

// const register_routing = require("./routes/register_routing")

router.get('/', (req , res) =>{


   res.render('login.ejs', {user: 'guest'} )
})

router.post('/', async (req, res)=>{
   // console.log(req.body.name)
   // console.log(req.body.password)
   // return res.redirect('/')


   let email = req.body.email
   let password = req.body['password']

   let result = await User.findOne({ email: email});

   console.log(result)

   if (result == null){
      res.render('login.ejs', { user: 'null'}) 
   } else {
      resultpassword = result.password  
      const same = bcrypt.compareSync(password, resultpassword)

      if (same) {
         req.session["username"] = result.username;
         res.render('index',{name:req.session["username"]})
      } else{
         res.render('login.ejs', { user: ''})
   }
}
})

// let result = await User.findOne({ email: email});
//     console.log(result)

//     if (result != null){
//         res.render('register.ejs', {user:'exist'})
//     }
//     else {
//         user.save()
//         .then((result) => console.log(`Saved successfully result : ${result}`))
//         .catch(e => console.error(e));
//         res.redirect('/login')
//     }



module.exports = router