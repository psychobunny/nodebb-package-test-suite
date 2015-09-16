"use strict";

var setup = {};
var async = require('async'),
	winston = require('winston'),
	exec = require('child_process').exec;



setup.nodebb = function(plugins, next) {
	winston.info('Setting up NodeBB');
	//async.series([clone, npmi, async.apply(npmiplugins, plugins), configure], function(err) {
	async.series([clone], function(err) {
		next(err, plugins);
	});
};

function clone(next) {
	winston.info('Cloning...');
	exec('git clone https://github.com/NodeBB/NodeBB.git', function(err) {
		next(null); // null on purpose during dev, to prevent having to reclone everytime
	});
}

function npmi(next) {
	winston.info('Installing node modules...');
	exec('cd NodeBB && npm i', next);
}

function npmiplugins(plugins, next) {
	winston.info('Installing plugins... this... will take a while.')
	plugins = plugins.map(function(plugin) {
		return plugin.name;
	});

	plugins = plugins.concat(['redis@~0.10.1', 'connect-redis@~2.0.0']);

	async.each(plugins, function(plugin, next) {
		exec('cd NodeBB && npm i ' + plugin, function(err) {
			next(null); // sometimes it's published on npm but not on git. we'll remove these later
		});
	}, next);
}

function configure(next) {
	winston.info('Configuring NodeBB...');
	exec('cp config.json NodeBB/config.json', next);
}

module.exports = setup;