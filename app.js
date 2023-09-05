//project start // npm init -y // library json 생성

//npm (yarn) express
//npm (yarn) ejs   // ejs 문법,포맷 사용 (express에서)
//npm install -g nodemon 서버자동리셋


const express = require("express")
const path = require("path")
const app = express()

const routing = require("./routes/routing")
const damirouting = require("./routes/damirouting")
const register_routing = require("./routes/register_routing")
const login_routing = require("./routes/login_routing")

const mongoose = require("mongoose") 
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// Connect to MongoDB
mongoose.connect("mongodb+srv://root:1234@cluster0.yvy1dyo.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));  

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({                                          
    secret:"asdfasffdas",
    resave:false,
    saveUninitialized:true 
    store : new FileStore()                               
  }))

app.use('/', routing)
app.use('/dami',damirouting)
app.use('/register',register_routing)
app.use('/login',login_routing)


app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine','ejs')


let port = 8000

app.listen(port , () =>{

    console.log(`server is running at http://localhost:${port}`)
})
