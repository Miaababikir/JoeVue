let fs = require('fs-extra');
const path = require("path");
let Config = require('./Config').Config;


class File {

    static create(path, content) {
        path  = this.getPath(path);
        let dir = this.splitPath(path);
        return this.createFile(dir, content);
    }

    static createDir(path) {
        try {
            fs.ensureDirSync(path);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    static createFile(file, content) {
        this.createDir(file.dirname);
        try {
            fs.writeFileSync(file.dirname + file.filename, content);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    static readFile(file) {
        file = this.resolve(file);
        return fs.readFileSync(file);
    }

    static readJson(path) {
        path = this.resolve(path);
        return fs.readJsonSync(path);
    }

    static resolve(file) {
        return path.resolve(__dirname, file);
    }

    static splitPath(path) {
        let result = path.replace(/\\/g, "/").match(/(.*\/)?(\..*?|.*?)(\.[^.]*?)?(#.*$|\?.*$|$)/);
        return {
            dirname: result[1] || "",
            filename: result[2] + result[3],
        };
    }

    static getPath(path) {
        return new Config().defaultPath + path
    }
}


module.exports = {File};