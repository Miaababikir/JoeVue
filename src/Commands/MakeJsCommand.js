let Command = require('./Command').Command;
const chalk = require('chalk');
let File = require('../Helpers/File').File;
const path = require("path");

class MakeJsCommand extends Command {

    constructor() {
        super();

        this.signature = "make:js <js>";

        this.description = "Create javascript file.";

        this.template = "../Templates/Javascript.html";
    }

    execute(js) {
        File.create(`${js}.js`, File.readFile(this.template));
        console.log(chalk.green(`Javascript file created successfully`));
    }
}

module.exports = { MakeJsCommand };