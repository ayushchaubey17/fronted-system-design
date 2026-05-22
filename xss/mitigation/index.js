const express = require("express")


const app = express()
const port = 3000


app.use((req,res,next)=>{
res.setHeader(
   "Content-Security-Policy",
   "default-src 'self'; " +
   "script-src 'self' 'nonce-abcd';"
)
next();
})


app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})