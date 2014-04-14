Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commands){
	var each, command;
	
	for(each in commands){
		command=commands[each];

		if(command === "l"){
			this.position = new Position(this.position.x-1,0);
		} else if (command === "r") {
			this.position = new Position(this.position.x+1,0);
		} else {
			this.position = new Position(0, this.position.y+1);
		}
	}
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}