Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commands){
	var each, command;
	
	for(each in commands){
		command=commands[each];

		var x = this.position.x,
			y = this.position.y;
		
		if(command === "l"){
			this.position.applyCommand(new CommandLeft());
		} else if (command === "r") {
			this.position.applyCommand(new CommandRight());
		} else if (command === "b") {
			this.position = new Position(x, y-1);
		} else { //forward
			this.position = new Position(x, y+1);
		}
	}
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}

Position.prototype.applyCommand = function(command){
	this.x+=command.increment.x;
	this.y+=command.increment.y;
}

CommandLeft = function(){
	this.increment = new Position(-1,0);
}

CommandRight = function(){
	this.increment = new Position(1,0);
}