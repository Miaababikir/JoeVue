
let SetDefaultPath = require('./SetDefaultPathCommand').SetDefaultPathCommand;
let SetPresetPath = require('./SetPresetPathCommand').SetPresetPathCommand;
let MakeComponent = require('./MakeComponentCommand').MakeComponentCommand;
let MakeView = require('./MakeViewCommand').MakeViewCommand;
let MakeJs= require('./MakeJsCommand').MakeJsCommand;

class CommandConstructor {
    static getCommands() {
        return [
            MakeComponent,
            MakeView,
            SetDefaultPath,
            MakeJs,
            SetPresetPath
        ];
    }
}

module.exports = { CommandConstructor };