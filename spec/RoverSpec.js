beforeEach(function() {
  this.addMatchers({
    toBeIn: function(expectedPosition) {
      return JSON.stringify(this.actual.position) === JSON.stringify(expectedPosition);
    }
  });
});

describe("Rover", function(){
	var rover = new Rover();
	it("should exist", function(){
		expect(rover).toBeTruthy();
	});
	
	describe("moves", function(){
		it("left", function(){
			rover.receive("l");
			expect(rover).toBeIn(new Position(-1, 0));
		});
	});
	
});