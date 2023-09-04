const express = require("express")
const path = require("path")
const app = express()

let port = 8000

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine','ejs')




app.listen(port , () =>{

    console.log(`server is running at http://localhost:${port}`)
})