
let MakeComponent = require('./MakeComponentCommand').MakeComponentCommand;
let MakeView = require('./MakeViewCommand').MakeViewCommand;

class CommandConstructor {
    static getCommands() {
        return [MakeComponent, MakeView];
    }
}

module.exports = { CommandConstructor };