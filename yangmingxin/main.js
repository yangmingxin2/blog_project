var express = require('express'),
    app = express(),
    bodyparser = require('body-parser');

app.use(express.static("./satic"));
app.use(bodyparser.urlencoded({ extended: false }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./config/config.js")(app);

app.listen(8282, function() {
    console.log("port:8282")
})