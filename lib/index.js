"use strict";

var COCLevels = function () {
	this.levels = require("./cocMaxLevels.json");
	return this;
};

COCLevels.prototype.maxLevel = function(townhallLevel, unit /* spell|troops|heroes */, name) {
	var units = this.levels[unit];
	var result = null;
	for (var i = units.length - 1; i >= 0; i--) {
		var u = units[i];
		if (u.name === name){
			result = u.levels[townhallLevel-1];
			break;
		}
	}
	if (result === null){
		throw new Error("townhallLevel, unit /* spell|troops|heroes */, name not found" )
	}
	return result;
};


module.exports = COCLevels;