
// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var http       = require('http');
var request    = require('request');
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/app')); 
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;        // set our port

/*
  ____             _
 |  _ \ ___  _   _| |_ ___  ___
 | |_) / _ \| | | | __/ _ \/ __|
 |  _ < (_) | |_| | ||  __/\__ \
 |_| \_\___/ \__,_|\__\___||___/
 */

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
//router.get('/', function(req, res) {
//    res.json({ message: 'hooray! welcome to our api!' });   
//});

router.get('/movies', function(req, res) {

	var irishMovies = "http://data.linkedmdb.org/sparql?query=SELECT%20%3Fmovie%20%3Fname%0AWHERE%20%7B%0A%3Fmovie%20%3Chttp%3A%2F%2Fdata.linkedmdb.org%2Fresource%2Fmovie%2Fcountry%3E%20%3Chttp%3A%2F%2Fdata.linkedmdb.org%2Fresource%2Fcountry%2FIE%3E%20.%0A%3Fmovie%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23label%3E%20%3Fname%20.%0A%7D&output=json";

	request(irishMovies, function (error, response, body) {
        
    	res.json(JSON.parse(body));   
	});

});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('The Movies App Server is up and running on port: ' + port);