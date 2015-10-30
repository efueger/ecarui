/**
 * Sensordata Model Module
 * @module models/sensordata
 */
require('../lib/ltfct');
var mongoose = require('mongoose');
var Sensordata = mongoose.Schema({ 
    key: String,
	values: [
		t: {type: Date, default: new Date().getTime()},
		v: Mixed
	]
});

/**
 * Add Value to Sensor
 * @params {string} k - sensor identifier
 * @params {Mixed} v - value
 * @params {Date} receivedTime - Time the sensor data was received, defaults to now if not set
 *
 * @returns {boolean} true if initiated
 * @returns {side-effect} update in db
 * @callback defaultErrCb
 */
Sensordata.statics.add = function(k, v, receivedTime) {
	receivedTime = receivedTime || new Date().getTime();
	this.update( 
		{key: k}, // query
		{$push: {values, {t: receivedTime, v:v}}}, // set
		{upsert: true}, defaultErrCb);
	return true;
}

/**
 * Clears all of a sensor's values
 * CAUTION
 * @params {string} k - sensor identifier
 *
 * @returns {boolean} true if initiated
 * @returns {side-effect} update in db
 * @callback defaultErrCb
 */
Sensordata.statics.clear = function(k) {
	this.update( 
		{key: k}, // query
		{values: []}, // set
		{upsert: true}, defaultErrCb);
	return true;
}

// #TODO clear values older than


/**
 * Wipe all sensordata
 * CAUTION
 *
 * @returns {boolean} true if initiated
 * @returns {side-effect} update in db
 * @callback defaultErrCb
 */
 Sensordata.statics.wipe = function() {
	// #TODO
 }

module.exports = mongoose.model('Sensordata', Sensordata);