"use strict";

var test = {};
var async = require('async');

test.plugins = function(plugins, next) {
	async.each(plugins, testPlugin, next);
};

function testPlugin(plugin, next) {
	console.log(plugin, next);
	next();
}

module.exports = test;