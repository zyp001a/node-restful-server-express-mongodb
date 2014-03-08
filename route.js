module.exports = function(app, config, utils) {
	app.get(config.restRoot, utils.findAll);
	app.get(config.restRoot+'/:id', utils.findById);
	app.post(config.restRoot,utils.addEntity);
	app.put(config.restRoot+'/:id', utils.updateEntity);
	app.delete(config.restRoot+'/:id', utils.deleteEntity);
};
