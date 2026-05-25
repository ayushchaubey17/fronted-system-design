
const express = require("express")

const app = express();


const port = 9000;

// app.use((req,res,next)=>{

// res.removeHeader('X-Powered-By')
// // res.setHeader('x-')

// next();
// })

app.use((req,res,next)=>{

   res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'"
   );

//    res.removeHeader('X-Powered-By');
//    res.setHeader(
//       "X-Frame-Options",
//       "DENY"
//    );

//    res.setHeader(
//       "X-Content-Type-Options",
//       "nosniff"
//    );

   res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000"
   );

   next();
});


app.get("/list",(req,res)=>{
    res.send([{
        id:1,
        name:"ayush",
        age:25
    }])
})



app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})