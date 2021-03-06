// We need to 'require' the
// following modules
var express = require("express"),
    http = require("http"),
    path = require("path"),
    mysql = require("mysql");
    app = express();

// This is our basic configuration
app.configure(function () {
    // Define our static file directory, it will be 'public'
    app.use(express.static(path.join(__dirname, 'public')));
});

var connection = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : 'root',
   database : 'gexdb_demo'
});

// Create the http server and get it to listen on the specified port 3000
http.createServer(app).listen(3000, function(){
    console.log("Express server listening on port 3000");
});

/*
app.get("/", function (req, res) {
    //send "Hello World" to the client as html
    res.send("Hello World!");
    connection.query("SELECT product_name FROM wt_lot", function(err, rows) {
        if (err) {
            throw err;
        }
        var jsonObject = {
            "products" : rows
        }
        res.json(jsonObject);
    });
});
*/
app.get("/lots.json", function (req, res) {
    connection.query("SELECT * FROM wt_lot WHERE PRODUCT_NAME = 'ANBAE40ADA'", function(err, rows) {
        if (err) {
            throw err;
        }
        var jsonObject = {
           "lots" : rows   
        }
        res.json(jsonObject);
    });
});

app.get("/products.json", function (req, res) {
    connection.query("SELECT DISTINCT PRODUCT_NAME FROM wt_lot", function(err, rows) {
        if (err) {
            throw err;
        }
        var jsonObject = {
           "products" : rows   
        }
        res.json(jsonObject);
    });
});

app.get("/lots.json/:id", function (req, res) {
    connection.query('SELECT * FROM wt_lot where PRODUCT_NAME = "' + req.params.id + '"', function(err, rows) {
        if (err) {
            throw err;
        }
        var jsonObject = {
            "lots" : rows
        }
        res.json(jsonObject);
    });
});

/*
app.get("/", function (req, res) {
    connection.query("SELECT PRODUCT_NAME FROM wt_lot", function(err, rows) {
        if (err) {
            throw err;
        }
        var jsonObject = {
            "products" : rows
        }
        res.json(jsonObject);
    });
});
*/
app.get("/goodbye", function (req, res) {
    //send "Goodbye World" to the client as html
    res.send("Goodbye World!");
});

app.get("/login", function (req, res) {
    res.send("You need to login!");
});
