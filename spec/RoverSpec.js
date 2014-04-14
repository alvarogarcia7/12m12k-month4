beforeEach(function() {
  this.addMatchers({
    toBeIn: function(expectedPosition) {
      return JSON.stringify(this.actual.position) === JSON.stringify(expectedPosition);
    }
  });
});

describe("Rover", function(){
	var rover;
	it("should exist", function(){
		expect(rover).toBeTruthy();
	});
	
	beforeEach(function(){
		rover = new Rover();
	});
	
	describe("moves", function(){
		it("left", function(){
			rover.receive("l");
			expect(rover).toBeIn(new Position(-1, 0));
		});
		it("right", function(){
			rover.receive("r");
			expect(rover).toBeIn(new Position(1, 0));
		});
		it("two times to the left", function(){
			rover.receive("ll");
			expect(rover).toBeIn(new Position(-2, 0));
		});
		
		it("forward", function(){
			rover.receive("f");
			expect(rover).toBeIn(new Position(0, 1));
		});
	});
	describe("does not move", function(){
		it("when left, right, left, right", function(){
			rover.receive("lrlr");
			expect(rover).toBeIn(new Position(0, 0));
		});
	});
	
});