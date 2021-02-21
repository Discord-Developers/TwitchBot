/*
Logger class for easy and aesthetically pleasing console logging 
*/
const chalk = require("chalk");
const moment = require("moment");

exports.log = (content, type = "log") => {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    switch (type) {
        case "log":
            {
                return console.log(e, `${timestamp} ${chalk.bgBlue(type.toUpperCase(e))} ${content} `);
            }
        case "warn":
            {
                return console.log(e, `${timestamp} ${chalk.black.bgYellow(type.toUpperCase(e))} ${content} `);
            }
        case "error":
            {
                return console.log(e, `${timestamp} ${chalk.bgRed(type.toUpperCase(e))} ${content} `);
            }
        case "debug":
            {
                return console.log(e, `${timestamp} ${chalk.green(type.toUpperCase(e))} ${content} `);
            }
        case "cmd":
            {
                return console.log(e, `${timestamp} ${chalk.black.bgWhite(type.toUpperCase(e))} ${content}`);
            }
        case "ready":
            {
                return console.log(e, `${timestamp} ${chalk.black.bgGreen(type.toUpperCase(e))} ${content}`);
            }
        default:
            throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
    }
};

exports.error = (...args) => this.log(...args, "error");

exports.warn = (...args) => this.log(...args, "warn");

exports.debug = (...args) => this.log(...args, "debug");

exports.cmd = (...args) => this.log(...args, "cmd");