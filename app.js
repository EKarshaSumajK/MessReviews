const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/mh.ejs",(req,res)=>{
    res.render("mh");
})
app.get("/lh.ejs",(req,res)=>{
    res.render("lh");
})
app.post("/mh.ejs",(req,res)=>{
    var name = req.body.myname;
    var registerNumber = req.body.registerno;
    var feedback = req.body.message;
    var ratings = req.body.rating;
    var hostel = req.body.hostel;
    var quantity = req.body.quantity;
    var quality = req.body.quality;
    var option = req.body.opt;
    console.log(name);
    console.log(registerNumber);
    console.log(hostel);
    console.log(feedback);
    console.log(ratings);
    console.log(quantity);
    console.log(quality);
    console.log(option);
    res.redirect("/");
    
})
app.post("/lh.ejs",(req,res)=>{
    var name = req.body.myname;
    var registerNumber = req.body.registerno;
    var feedback = req.body.message;
    var ratings = req.body.rating;
    var hostel = req.body.hostel;
    var quantity = req.body.quantity;
    var quality = req.body.quality;
    var option = req.body.opt;
    console.log(name);
    console.log(registerNumber);
    console.log(hostel);
    console.log(feedback);
    console.log(ratings);
    console.log(quantity);
    console.log(quality);
    console.log(option);
    res.redirect("/");
    
})

app.listen("3000",()=>{
    console.log("Server started");
})
