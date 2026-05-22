const strict = require("assert/strict")
const express = require("express")
const port = 3001
const app = express()
const path = require('path')


app.use((req,res,next)=>{
    // res.setHeader(
    //     'Content-Security-Policy',
       
    //     "frame-ancestors  'self';"
    // );


    res.cookie("session_id","12345",{
        httpOnly:false,
        sameSite:"Strict",
        secure:true
    })
    // res.setHeader("X-Frame-Options","SAMEORIGIN")
    next();
})
app.use(express.static("public"))



app.get("/server1/overlay1",(req,res)=>{
res.sendFile(path.join(__dirname,"public","/overlay1.html"))
})

app.get("/server1/overlay2",(req,res)=>{
res.sendFile(path.join(__dirname, "public","/overlay2.html"))
})









app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})
