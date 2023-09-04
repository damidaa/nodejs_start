const express = require("express")

const app = express()

let port = 8000

app.listen(port , () =>{

    console.log(`server is running at http://localhost:${port}`)
})