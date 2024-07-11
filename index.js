#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta.bold("\n\tWelcome to the 'COUNTDOWN TIMER'\n"));
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: chalk.yellowBright("Please enter the seconds")
});
if (res.userInput > 60) {
    console.log(chalk.red("Enter the number within 60."));
    process.exit();
}
let myInput = res.userInput;
function startTime(value) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + value + 2);
    const intervalTime = new Date(initialTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log(chalk.cyanBright("Timer has expired!"));
            process.exit();
        }
        const minute = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const second = Math.floor(timeDifference % 60);
        console.log(`${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(myInput);
