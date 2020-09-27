"use strict";
const express = require("express");
const routes = express.router();
const pool = require("./connection");

routes.get("/", (req,res)=>{
    pool.query("SELECT * FROM records")
}).then(result=>{
    res.json(result.rows);
})

module.exports = routes;