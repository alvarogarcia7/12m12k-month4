function CommandFactory() { }

CommandFactory.prototype.createCommand = function (command) {

    switch (command) {
        case "l":
            this.command = Left;
            break;
        case "r":
            this.command = Right;
            break;
        case "f":
            this.command = Forward;
            break;
        default:
            this.command = Backward;
            break;
    }

    return this.command;
};