const express = require("express")
const path = require("path")

const port = 3000


const app = express()

app.use(express.static("public"))

app.get("/server2/example1",(req,res)=>{
res.sendFile(path.join(__dirname,"public","/example1.html"))
})

app.get("/server2/example2",(req,res)=>{
res.sendFile(path.join(__dirname, "public","/example2.html"))
})









app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})
