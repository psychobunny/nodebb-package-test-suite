var nconf = require('nconf'),
	winston = require('winston'),
	url = require('url'),
	path = require('path');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
	colorize: true
});

nconf
	.argv()
	.env()
	.file(path.join(__dirname, 'config.json'));

require('./lib/repos').pull();