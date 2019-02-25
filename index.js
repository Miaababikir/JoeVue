#!/usr/bin/env node

let program = require('commander');
let CommandConstructor = require('./src/Commands/constructors').CommandConstructor;

let commands = CommandConstructor.getCommands();


commands.forEach((item) => {
    let command = new item();
    program
        .command(command.signature)
        .description(command.description)
        .action((param) => {
            command.execute(param);
        });

});



program.parse(process.argv);