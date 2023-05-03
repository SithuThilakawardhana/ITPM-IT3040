const express = require("express");
const donator = require("./data/donator");
const notes = (".data/donator");
const dotenv = require('dotenv')

const app  =express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("API is runnning");
});

//get all data
app.get('/api/donator',(req,res)=>{
    res.json(donator);
});

//fetch only selected or one data- fetch the id from url, req.params
app.get("/api/donator/:id",(req,res)=>{
    const donator1 = donator.find((n)=>n._id===req.params.id);
    res.send(donator1);
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));