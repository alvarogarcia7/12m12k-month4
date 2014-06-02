Rover = function () {
    this.position = new Position(0, 0);
}

Rover.prototype.receive = function (commands) {
    var each, command;

    var commandFactory = new CommandFactory();

    for (each in commands) {
        command = commands[each];

        var x = this.position.x,
			y = this.position.y;

        var commandMove = commandFactory.createCommand(command);
        var movement = new Movement(commandMove);
        this.position = movement.Execute(x, y);
    }
}