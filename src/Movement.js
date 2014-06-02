var Movement = function (strategy) {
    this.strategy = strategy;
};

Movement.prototype.Execute = function (x, y) {
    return this.strategy(x, y);
};

var Left = function (x, y) {
    return new Position(x - 1, y);
};

var Right = function (x, y) {
    return new Position(x + 1, y);
};

var Forward = function (x, y) {
    return new Position(x, y + 1);
};

var Backward = function (x, y) {
    return new Position(x, y - 1);
};