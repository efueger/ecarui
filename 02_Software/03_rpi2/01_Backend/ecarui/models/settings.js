/**
 * Settings Model Module
 * @module models/settings
 */
require('../lib/ltfct');
var mongoose = require('mongoose');
var Settings = mongoose.Schema({ 
    key: String,
	value: String 
});

/**
 * Set a key value pair
 * @params {string} k - Key to be unset
 *
 * @returns {boolean} true if initiated
 * @returns {side-effect} update in db
 * @callback defaultErrCb
 */
Settings.statics.set = function(k, v) {
	this.update( 
		{key: k}, // query
		{value: v}, // set
		{upsert: true}, defaultErrCb);
	return true;
}

/**
 * Unset a Settings value by key
 * @params {string} k - Key to be unset
 *
 * @returns {boolean} true if initiated
 * @returns {side-effect} update in db
 * @callback defaultErrCb
 */
Settings.statics.unset = function(k) {
	this.update( 
		{key: k}, // query
		{value: ""}, // set
		{upsert: true}, defaultErrCb);
	return true;
}

// #TODO wipe all settings

module.exports = mongoose.model('Settings', Settings);