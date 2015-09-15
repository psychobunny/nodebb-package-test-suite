"use strict";

var nconf = require('nconf'),
	winston = require('winston'),
	url = require('url'),
	path = require('path'),
	async = require('async');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
	colorize: true
});

nconf
	.argv()
	.env()
	.file(path.join(__dirname, 'config.json'));


async.waterfall([
	async.apply(require('./lib/repos').pull),
	async.apply(require('./lib/setup').nodebb),
	async.apply(require('./lib/test').plugins),
], function(err) {
	winston.log('All done');
});