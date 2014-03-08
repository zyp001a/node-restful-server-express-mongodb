module.exports = function(app, config) {
	var mongo = require('mongodb'),
			fs = require('fs');

	var Server = mongo.Server,
			Db = mongo.Db,
			BSON = mongo.BSONPure;

//	var config = require('./config');
	var server = new Server(config.db.host, config.db.port, {auto_reconnect: true});
	var db = new Db(config.db.database, server, {safe: true});

	var utils = require('./utils')(app, db, config);

	db.open(function(err, db) {
    if(!err) {
      console.log("Connected to database:" + config.db.database);
			utils.populateDB();
    }
	});

	require("./route")(app, config, utils);
};
