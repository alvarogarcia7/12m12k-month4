var MovementRover = function(strategy) {
    this.strategy = strategy;
}

MovementRover.prototype.execute = function() {
    return this.strategy();
}

var LeftMove = function() {
    return new Position(x-1, y);
}

var RightMove = function() {
    return new Position(x+1, y);
}

var BackwardMove = function() {
    return new Position(x, y-1);
}

var ForwardMove = function() {
    return new Position(x, y+1);
}