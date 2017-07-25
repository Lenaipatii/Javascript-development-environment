//reference for the express
var express = require('express');

//reference for the path
var path = require('path');

//it will open our site in the browser
var open = require('open');

//stores the port
var port = 3000;

//instance of express
var app = express();

//any references to the root should be handle by this function, whitch takes an request and response
//('/') - request an root
app.get('/', function(req, res) {
	//__dirname means 'The directory of this script'.
	res.sendFile(path.join(__dirname, '../src/index.html'));
	//sending the file in index.html
	console.log(__dirname);
});


app.listen(port, function(err) {
	if(err){
		console.log(err);
	}else {
		//open the aplication on this adress, on this port
		open('http://localhost:' + port);
	}
});
