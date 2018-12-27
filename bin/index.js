#! /usr/bin/env node
const shell = require("shelljs")
const chalk = require('chalk')
const fs = require('fs')
const args = process.argv.slice(2)

console.clear()

if (args[0])
{
    let execType = args[0].split(':')

    if (execType[0] === "make")
    {
        switch (execType[1])
        {
            case "project":
                if (args[1])
                {
                    console.log(`${chalk.bgMagenta(`Project creation :`)} ${chalk.magenta(args[1])}`)
                    shell.exec(`git clone https://github.com/Freeze455/Discord-Bot-Template.git ${args[1]} && cd ${args[1]}`)
                    console.log(`${chalk.yellow("SUCCES : Project creation successfully")}`)
                }
                else
                {
                    console.log("ERROR : Please specify a name for the project")
                }
            break

            case "command":
                console.log("Creating the command file")
                let contentFile = 
                    'exports.run = (client, message, args) => {\n\n' +
                    '    // Your code\n\n' +
                    '}'
                    
                fs.writeFileSync(`commands/${args[1]}.js`, contentFile, "UTF-8")
                console.log(`${chalk.yellow("SUCCES : Creating the command file successfully")}`)
            break

            default:
                console.log(`${chalk.redBright('\nERROR : Please select a true option "ice make:[project | command] <name>"')}`)
            break
        }
    }
    else
    {
        console.log(`${chalk.redBright('ERROR : Please select "make" option "ice make:[project | command] <name>"')}`)
    }
}
else
{
    console.log(`${chalk.redBright(`ERROR : Invalid usage.\nPlease select an option "ice make:[project | command] <name>"`)}`)
}