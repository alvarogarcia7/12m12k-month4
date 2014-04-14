describe("Rover", function(){
	var rover = new Rover();
	it("should exist", function(){
		expect(rover).toBeTruthy();
	});
	
	describe("moves", function(){
		it("left", function(){
			rover.receive("l");
			expect(rover).toBeIn(new Position(undefined, undefined));
		});
	});
	
});