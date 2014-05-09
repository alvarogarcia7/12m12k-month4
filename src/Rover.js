Rover = function(){
	this.position = new Position(0,0);
}

Rover.prototype.receive = function(commands){
	var each, command;
	
	for(each in commands){
		command=commands[each];

		var x = this.position.x,
			y = this.position.y;
		
		this.position = //Se debe ejecutar una de las funciones strategy.
		/*if(command === "l"){
			this.position = new Position(x-1, y);
		} else if (command === "r") {
			this.position = new Position(x+1, y);
		} else if (command === "b") {
			this.position = new Position(x, y-1);
		} else { //forward
			this.position = new Position(x, y+1);
		}*/
	}
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}