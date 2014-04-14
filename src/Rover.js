Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commandString){
	var each, command;
	
	commands = this.toCommands(commandString);

	for(each in commands){
		this.position.applyCommand(commands[each]);
	}
}

Rover.prototype.toCommands = function(commandString){
	var each, commands = [], currentCommand, commandFactory = new CommandFactory();
	for(each in commandString){
		command=commandString[each];

		if(command === "l"){
			currentCommand = commandFactory.left();
		} else if (command === "r") {
			currentCommand = commandFactory.right();
		} else if (command === "b") {
			currentCommand = commandFactory.backwards();
		} else { //forward
			currentCommand = commandFactory.forwards();
		}
		commands.push(currentCommand);
	}
	return commands;
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