"use strict";

var setup = {};
var async = require('async');


setup.nodebb = function(plugins, next) {
	async.series([clone, npmi, async.apply(npmiplugins, plugins), configure], function(err) {
		next(err, plugins);
	});
};

function clone(next) {
	next();
}

function npmi(next) {
	next();
}

function npmiplugins(plugins, next) {
	//console.log(plugins);
	next();
}

function configure(next) {
	next();
}

module.exports = setup;