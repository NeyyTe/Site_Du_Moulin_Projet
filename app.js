const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs")})

app.get("/hebergement", (req,res) => {
    res.render("hebergement.ejs")})

    app.get("/Contact", (req,res) =>{
        res.render("Contact.ejs")
    })

    app.listen(8080);

