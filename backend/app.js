const express = require('express');
const mysql = require('mysql');
const app =express();


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Beyzaevcenim1.",
    database:"test"

})

app.use(express.json())

app.get("/",(req,res)=>{
    res.json("hi")
})

app.get("/films",(req,res)=>{
    const q ="SELECT * FROM films"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})

app.post("/films",(req,res)=>{
    const q = "INSERT INTO films(`name`,`desc`,`poster`) VALUES(?)"
    const values =[
        req.body.name,
        req.body.desc,
        req.body.poster,
      
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("cretaed");
    })


})


app.listen(3000,()=>{
    console.log('connected with backend')
})