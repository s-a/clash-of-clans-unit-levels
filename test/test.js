var should = require("should");

describe("heroes",function(){
	var COC = require("./../lib/index.js");
	var coc = new COC();

	it("Archer Queen", function () {
		coc.maxLevel(10, "heroes", "Archer Queen").should.equal(30)
		debugger;
		coc.maxLevel(11, "heroes", "Archer Queen").should.equal(40)
	});	
	it("Barbarian King", function () {
		coc.maxLevel(1, "heroes", "Barbarian King").should.equal(0)
		coc.maxLevel(10, "heroes", "Barbarian King").should.equal(30)
		coc.maxLevel(11, "heroes", "Barbarian King").should.equal(40)
	});	
});