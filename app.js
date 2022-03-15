const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let items = ['Buy Food', 'Cook Food', 'Eat Food'];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindOfDay: day,
        itemName: items
    });
});

app.post("/", function(req, res){
    items.push(req.body.newItem);
    console.log(items);
    res.redirect('/');
});

app.listen(port, function(){
    console.log("Server started on port "+port)
});