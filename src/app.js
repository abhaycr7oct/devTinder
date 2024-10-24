const express = require("express");

const app = express();

// app.use((req,res)=>{
//     res.send("yo up and running");
// });

app.use("/",(req,res)=>{
    res.send("yo up and running from roots ");
});

app.use("/test",(req,res)=>{
    res.send("yo up and running from test ");
});

app.use("/hello",(req,res)=>{
    res.send("yo up and running from hello");
});

app.listen(7777, () => {
    console.log("server on port");
})