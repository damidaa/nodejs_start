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

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', routing)
app.use('/dami',damirouting)
app.use('/register',register_routing)

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine','ejs')


let port = 8000

app.listen(port , () =>{

    console.log(`server is running at http://localhost:${port}`)
})
