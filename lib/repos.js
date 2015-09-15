"use strict";

var nconf = require('nconf'),
	request = require('request');

var repos = {};

repos.pull = function() {
	request(nconf.get('api'), function (error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body);
		} else {
			throw new Error("Unable to query package manager");
		}
	});
};


module.exports = repos;