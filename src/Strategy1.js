var MovementRover = function(movement, x, y) {
    this.strategy = this.Translate[movement];
	this.posX = x;
	this.posY = y;
}

MovementRover.prototype.Strategies = {
	Default: function(x,y) {
				return new Position (x, y);
			}
	, LeftMove: function(x,y) {
				return new Position (x-1, y);
			}
	, RightMove: function(x,y) {
				return new Position (x+1, y);
			}
	, BackwardMove: function(x,y) {
				return new Position (x, y-1);
			}
	, ForwardMove: function(x,y) {
				return new Position (x, y+1);
			}
}

MovementRover.prototype.Translate = {
	l: 'LeftMove'
	, r: 'RightMove'
	, b: 'BackwardMove'
	, f: 'ForwardMove'
}

MovementRover.prototype.Execute = function() {
	return this.Strategies[this.strategy](this.posX,this.posY);
}