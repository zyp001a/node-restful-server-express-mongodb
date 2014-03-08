var config = {
	restRoot:'/books', //restfull root address
	db: { //mongodb config
		host:'localhost',
		port:27017,
		database:'bookdb',
		entityCollection:'book'
	},
	sampleData: [ //in the mongodb is empty, the sampleData is inserted
		{
			name: "sample book 1",
			authors: ["unknown"],
			description: "The first sample book"
		},
		{
			name: "sample book 2",
			authors: ["unknown","adsfa"],
			description: "The second sample book"
		}
	]
};

var express = require('express'),
		http = require('http');
var app = express();


//in your example it should be require("restful-server-express-mongodb")(...)
require("./index")(app, config);

//To test, use 'curl http://localhost:3003/books'
http.createServer(app).listen(3003);

