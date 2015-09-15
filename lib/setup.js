"use strict";

var setup = {};
var async = require('async');


setup.nodebb = function(callback) {
	async.series([clone, npmi, npmiplugins, setup], callback);
};

function clone(next) {

}

function npmi(next) {

}

function npmiplugins(next) {

}

function setup(next) {

}

module.exports = setup;