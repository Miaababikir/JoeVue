let Command = require('./Command').Command;
const chalk = require('chalk');
let File = require('../Helpers/File').File;

class MakeComponentCommand extends Command {

    constructor() {
        super();

        this.signature = "make:component <component>";

        this.description = "Create vue component template.";

        this.template = "../Templates/DefaultComponent.html"
    }

    execute(component) {
        File.create(`components/${component}.vue`, File.readFile(this.template));
        console.log(chalk.green(`Vue component created successfully `));
    }
}

module.exports = { MakeComponentCommand };