#! /usr/bin/env node
const shell = require("shelljs")
const chalk = require('chalk')
const fs = require('fs')
const args = process.argv.slice(2)

shell.config.silent = true;

if (!args[0]) return console.error(`${chalk.redBright(`ERROR : Invalid usage.\nPlease select an option "crystal make:project <name>"`)}`)


let execType = args[0].split(':')

if (execType[0] == "make") {

    if (!execType[1]) return console.error(`${chalk.redBright("ERROR : Invalid usage ")}`)
    if (execType[1] == "project") {

        if (!args[1]) return console.error(`${chalk.redBright("ERROR : Invalid usage ")}`)
        console.log(`${chalk.green("\nProject creation :")} ${chalk.green(args[1])}\n`)
        
        if (shell.exec(`git clone https://github.com/Freeze455/Discord-Bot-Template.git ${args[1]} && cd ${args[1]}`).code !== 0) {
            console.error(`${chalk.redBright("Error: Your project already exists")}`);
            shell.exit(1);
        } else {
            console.log("Download template from https://github.com/Freeze455/Discord-Bot-Template.git\n")
            fs.readdir(`./${args[1]}/events/`, (err, events) => {
            
                if (err) return console.error(err)
                console.log(chalk.yellow("Loading events\n"))

                for (let i = 0; i < events.length; i++) {

                    setTimeout(() => {

                        console.log(`- ${events[i].split(".")[0]} (100%)`)
                        if (i == events.length -1) {

                            console.log(chalk.yellow("\n\nLoading commands\n"))

                            fs.readdir(`./${args[1]}/commands/`, (err, commands) => {
                                if (err) return console.error(err)

                                for (let i = 0; i < commands.length; i++) {
                                    setTimeout(() => {
                                        console.log(`- ${commands[i].split(".")[0]} (100%)`)
                                        
                                        if (i == commands.length -1) {
                                            let targetFolder = __dirname.split('\\')
                                            console.log(`\nYour download location is "${targetFolder.slice(0, targetFolder.length -2).join("/")}/${args[1]}"\n`)
                                            console.log(`${chalk.green("\nSUCCES : Project creation successfully\n")}`)
                                        }
                                    }, i * 50)           
                                }
                            })
                        }
                    }, i * 50)
                }                
            })  
        }
    } else {
        return console.error(`${chalk.redBright("ERROR : Invalid usage 3")}`)
    }
}