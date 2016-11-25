"use strict";

var COCLevels = function () {
	this.levels = require("./cocMaxLevels.json");
	return this;
};

COCLevels.prototype.maxLevelByLaboratory = function(townhallLevel, unit /* spell|troops|heroes */, name) {
	var laboratoryLevel = this.levels.laboratory[townhallLevel-1];
	var units = this.levels[unit];
	var result = null;

	for (var i = units.length - 1; i >= 0; i--) {
		var u = units[i];
		if (u.name === name){
			result = u.levels;
			break;
		}
	}
	if (result === null){
		throw new Error(townhallLevel + " " + unit + " " + name + " ; townhallLevel, unit /* spell|troops|heroes */, name not found" )
	}

	var maxLvl = 0;
	for (var maxLevel = result.length - 1; maxLevel >= 0; maxLevel--) {
		var requiredLaboratoryLevel = result[maxLevel];
		if (requiredLaboratoryLevel <= laboratoryLevel){
			maxLvl = maxLevel + 1;
			break;
		}
	}
	
	return maxLvl;
}


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
		throw new Error(townhallLevel + " " + unit + " " + name + " ; townhallLevel, unit /* spell|troops|heroes */, name not found" )
	}
	return result;
};

COCLevels.prototype.max = function(townhallLevel, unit /* spell|troops|heroes */, name) {
	if (unit === "heroes"){
		return this.maxLevel(townhallLevel, unit /* spell|troops|heroes */, name);
	} else {
		return this.maxLevelByLaboratory(townhallLevel, unit /* spell|troops|heroes */, name);
	}
};

module.exports = COCLevels;