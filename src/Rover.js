Rover = function(){
	this.position = new Position();
}

Rover.prototype.receive = function(commands){
	this.position = new Position(-1,0);
}

Position = function(x, y){
	this.x=x;
	this.y=y;
}