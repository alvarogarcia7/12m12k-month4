Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commandString){
	var each, command, commandFactory = new CommandFactory(), commands;
	
	
	for(each in commandString){
		command=commandString[each];

		if(command === "l"){
			this.position.applyCommand(commandFactory.left());
		} else if (command === "r") {
			this.position.applyCommand(commandFactory.right());
		} else if (command === "b") {
			this.position.applyCommand(commandFactory.backwards());
		} else { //forward
			this.position.applyCommand(commandFactory.forwards());
		}
	}
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}

Position.prototype.applyCommand = function(command){
	this.x+=command.x;
	this.y+=command.y;
}

CommandFactory = function(){
}
CommandFactory.prototype.left = function(){
	return new Position(-1,0);
}
CommandFactory.prototype.right = function(){
	return new Position(1,0);
}
CommandFactory.prototype.forwards = function(){
	return new Position(0,1);
}
CommandFactory.prototype.backwards = function(){
	return new Position(0,-1);
}