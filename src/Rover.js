Rover = function(){
	this.position = new Position();
}

Rover.prototype.receive = function(commands){
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}