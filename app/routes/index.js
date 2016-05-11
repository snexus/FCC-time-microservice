'use strict';

var path = process.cwd();
var dateController = require(path + '/app/controllers/dateController.js');
module.exports = function (app) {
	
	app.route('/')
		.get(function (req, res) {
		res.sendFile(path + '/public/index.html');
		});

	app.route('*')
		.get(function (req, res) {

			console.log("path = ",req.path);
			var date = decodeURI(req.path.slice(1));
			res.send(dateController.getDate(date));
		
		});
		
};
