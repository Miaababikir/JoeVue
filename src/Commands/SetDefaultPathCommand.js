let Command = require('./Command').Command;
let Config = require('../Helpers/Config').Config;
const chalk = require('chalk');

class SetDefaultPathCommand extends Command {

    constructor() {
        super();

        this.signature = "set:path <path>";

        this.description = "Reset the default path for creating vue files.";

    }

    execute(path) {
        new Config().setConfig({
            "defaultPath": path
        });
        console.log(chalk.green(`Configuration updated successfully.`));
    }
}

module.exports = { SetDefaultPathCommand };