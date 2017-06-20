var express = require('express');
var bodyParser = require('body-parser');
// var books = require('../database-mongo');
var helper = require('./dbHelperFunctions.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/books', function (req, res) {
  helper.dbLookup(req, res);
});

app.post('/books', function(req, res) {
  var query = req.body.query;
  helper.fetchFromGoogleBooks(req, res, query);
});

app.delete('/books', function(req, res) {
  helper.deleteBooks(req, res);
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
