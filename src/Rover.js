Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commandString){
	var each, command, commandFactory = new CommandFactory(), commands = [];
	
	
	for(each in commandString){
		command=commandString[each];

		if(command === "l"){
			commands.push(commandFactory.left());
		} else if (command === "r") {
			commands.push(commandFactory.right());
		} else if (command === "b") {
			commands.push(commandFactory.backwards());
		} else { //forward
			commands.push(commandFactory.forwards());
		}
	}
	
	for(each in commands){
		this.position.applyCommand(commands[each]);
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