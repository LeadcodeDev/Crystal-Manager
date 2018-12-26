#! /usr/bin/env node
const shell = require("shelljs")
const chalk = require('chalk')
const args = process.argv.slice(2)

console.clear()

setTimeout(() => {console.log(`${chalk.cyan("<=== ICE COMMAND LINE INTERFACE ===>")}`)}, 1000)

setTimeout(() => {
    if (args[0])
    {
        if (args[1])
        {
            switch (args[0])
            {
                case "new":
                    setTimeout(() => {console.log(`\n${chalk.bgMagenta(`Téléchargement du model : ${args[1]} `)}`)}, 1000)
                    shell.exec(`git clone https://github.com/Freeze455/Discord-Bot-Template.git ${args[1]}`)
                break    
            }
            setTimeout(() => {console.log(`\n${chalk.yellow("SUCCES : Téléchargement du model")}`)}, 3000)
        }
        else
        {
            console.log(`\n${chalk.redBright("ERROR : Please specify a name for the project")}`)
        }
    }
    else
    {
        console.log(`\n${chalk.redBright("ERROR : Please select a \"new\" option <ice new project_name>")}`)
    }
}, 1000)