Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commands){
	var each, command;
	
	for(each in commands){
		command=commands[each];

		var x = this.position.x,
			y = this.position.y;
		
		var moveRover = new MovementRover(command, x, y);
		this.position = moveRover.Execute();
	}
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}