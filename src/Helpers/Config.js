
let fs = require('fs-extra');
const path = require("path");


class Config {

    constructor() {

        this.configFile = "../config.json";

        let data = this.readJson(this.configFile);

        for (let field in data) {
            this[field] = data[field];
        }
    }

    readJson(file) {
        file = this.resolve(file);
        return fs.readJsonSync(file);
    }

    resolve(file) {
        return path.resolve(__dirname, file);
    }

}

module.exports = { Config };