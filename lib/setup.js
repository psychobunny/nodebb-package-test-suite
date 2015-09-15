"use strict";

var setup = {};
var async = require('async'),
	winston = require('winston'),
	exec = require('child_process').exec;



setup.nodebb = function(plugins, next) {
	winston.info('Setting up NodeBB');
	async.series([clone, npmi, async.apply(npmiplugins, plugins), configure], function(err) {
		next(err, plugins);
	});
};

function clone(next) {
	winston.info('Cloning...');
	exec('git clone https://github.com/NodeBB/NodeBB.git', next);
}

function npmi(next) {
	winston.info('Installing node modules...');
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