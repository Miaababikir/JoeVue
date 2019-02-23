let Command = require('./Command').Command;
const chalk = require('chalk');
let File = require('../Helpers/File').File;
const path = require("path");

class MakeViewCommand extends Command {

    constructor() {
        super();

        this.signature = "make:view <view>";

        this.description = "Create vue view template.";

        this.template = "../Templates/DefaultComponent.html";
    }

    execute(component) {
        File.create(`views/${component}.vue`, File.readFile(this.template));
        console.log(chalk.green(`Vue view created successfully`));
    }
}

module.exports = { MakeViewCommand };