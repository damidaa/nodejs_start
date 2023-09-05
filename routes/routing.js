const express = require("express")

const router = express.Router()

const mongoose = require("mongoose")

const session = require('express-session');

const FileStore = require('session-file-store')(session);



router.get('/', (req , res) =>{

    return res.render('index', {name : 'guest'})
})

router.post('/gosignup', (req, res)=>{

    return res.redirect('/register')
 })

 router.post('/gosignin', (req, res)=>{

    return res.redirect('/login')
 })

 router.post('/goindex', (req, res)=>{

    return res.redirect('/')
 })







router.get('/logout',fucntion(req,res){
    req.session.destroy(function(){
    res.session.destroy(function(){});
    res.redirect('/');    
    })
})


module.exports = router