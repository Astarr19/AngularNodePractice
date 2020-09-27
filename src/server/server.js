"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./connection")
//let routes = require('./routes');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/record", (req,res)=>{
    pool.query("SELECT * FROM records ORDER BY id ASC").then(result=>{
        res.json(result.rows);
    })});
app.get('*', (req,res)=>{
    res.json({message: 'You aren\'t supposed to be here, but feel free to stay awhile. :)'})
})

app.listen(port, ()=>{console.log(`server listening on port ${port}`)});