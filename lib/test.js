"use strict";

var test = {};
var async = require('async'),
	winston = require('winston'),
	exec = require('child_process').exec;

test.plugins = function(plugins, next) {
	async.eachSeries(plugins, testPlugin, next);
};

function testPlugin(plugin, next) {
	async.series([
		async.apply(deactivatePlugins),
		async.apply(activatePluginAndLaunch, plugin.name),
	], next);
}

function deactivatePlugins(next) {
	winston.info('Resetting NodeBB...');
	exec('cd NodeBB && node app --reset -a', next);
}

function activatePluginAndLaunch(plugin, next) {
	winston.info('Activating plugin: %s', plugin);
	exec('cd NodeBB && node app --activate ' + plugin, next);
}

module.exports = test;