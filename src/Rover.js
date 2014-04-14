Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commands){
	var each, command, self = this;
	
	for(each in commands){
		command=commands[each];

		if(command === "l"){
			self.position = new Position(self.position.x-1,0);
		} else {
			self.position = new Position(self.position.x+1,0);
		}
	}
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}