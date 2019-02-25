
let SetDefaultPath = require('./SetDefaultPathCommand').SetDefaultPathCommand;
let MakeComponent = require('./MakeComponentCommand').MakeComponentCommand;
let MakeView = require('./MakeViewCommand').MakeViewCommand;
let MakeJs= require('./MakeJsCommand').MakeJsCommand;

class CommandConstructor {
    static getCommands() {
        return [MakeComponent, MakeView, SetDefaultPath, MakeJs];
    }
}

module.exports = { CommandConstructor };