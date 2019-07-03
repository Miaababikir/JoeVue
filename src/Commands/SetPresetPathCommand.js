let Command = require('./Command').Command;
let Config = require('../Helpers/Config').Config;
const chalk = require('chalk');

class SetPresetPathCommand extends Command {

    constructor() {
        super();

        this.signature = "set:preset <preset>";

        this.description = "Reset the default path to custom preset path.";

    }

    execute(preset) {

        if (preset === 'laravel') {
            new Config().setConfig({
                "defaultPath": 'resources/js/'
            });
        }

        if (preset === "vue") {
            new Config().setConfig({
                "defaultPath": 'src/'
            });
        }

        console.log(chalk.green(`Preset updated successfully.`));
    }
}

module.exports = { SetPresetPathCommand };