var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

//  this is to make sure it can work on local or remote server - bc we don't know what port it'll be on
var PORT = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "index.html"));
})
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


app.get("/api/cars", function(req, res){
    var cars = [{
        make: "Acura",
        model: "MDX"
    }]
    //  just sending json not the whole file 
    res.send(cars);

});