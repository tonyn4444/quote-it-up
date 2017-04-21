var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var request = require('request');




const API_KEY = '3WCCv5qHyjmsh6brG8k3D9d9VqK7p1gEKwgjsnacjNbHEsKfsa'
var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'

// .header("X-Mashape-Key", "3WCCv5qHyjmsh6brG8k3D9d9VqK7p1gEKwgjsnacjNbHEsKfsa")

var options = {
	url: url,
	headers: {
		'X-Mashape-Key': API_KEY
	}
}

function callback(error, response, body) {
	if(!error && response.statusCode == 200) {
		// console.log(body);
		var parsedData = JSON.parse(body);
		console.log(parsedData);
		console.log(parsedData["author"])
	}
	return parsedData
}

router.get('/', function(req, res) {
	request(options, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var parsedData = JSON.parse(body);
			res.render('index', {data: parsedData});
		}
	});
});

module.exports = router;
