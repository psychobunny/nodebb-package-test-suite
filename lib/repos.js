"use strict";

var nconf = require('nconf'),
	request = require('request');

var repos = {};

repos.pull = function(callback) {
	request(nconf.get('api'), function (error, response, body) {
		if (!error && response.statusCode === 200) {
			callback(null, JSON.parse(body).slice(0,3));
		} else {
			throw new Error("Unable to query package manager");
		}
	});
};


module.exports = repos;