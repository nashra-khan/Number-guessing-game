#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: " Please guess a number(number limit from 1 to 5) ",
    },
]);
if (answers.userguessednumber === randomNumber) {
    console.log("Congratulations ! you guessed the right number.");
}
else {
    console.log("Sorry! you guessed the wrong number.");
}
