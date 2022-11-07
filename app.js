const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/hebergement", (req, res) => {
    res.render("hebergement.ejs")
})

app.get("/Contact", (req, res) => {
    res.render("Contact.ejs")
})

app.post("/", (req, res) => {
    res.send("Nom :" + req.body.lastname + "<br>"  + "Prénom : " + req.body.firstname + "<br>"  + "Adresse : " + req.body.street + "<br>"  + "Code postal: " + req.body.zipCode + "<br>"  + "Ton Prénom est : " + req.body.city + "<br>"  + "Date de naissance : " + req.body.birthdate + "<br>"  + "Message : " + req.body.description)
})

app.listen(8080); () => {
    console.log("Serveur lancé deans le port 8080")
}

