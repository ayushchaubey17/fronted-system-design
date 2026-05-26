const express  = require("express")
const cors = require("cors")


const app = express()

const port = 3000

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin',"http://127.0.0.1:5500")
     res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE"
   );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
   );

   res.setHeader(
   "Access-Control-Allow-Credentials",
   "true"
);


    next()
})
// app.use(cors()
// )

app.get("/page",(req,res)=>{
    res.send([{
        id:1,
        name:"ayushe"
        ,age :12
    }])
})


app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})