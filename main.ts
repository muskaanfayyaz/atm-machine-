#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 20000; //DOLLAR
let myPinCode = 1234;

let pinanswer = await inquirer.prompt(
    [
        {
            name: "pin" ,
            message: "enter your pin ",
            type: "number",
        }
    ]
);

if (pinanswer.pin === myPinCode) {
    console.log("correct pin code ...");
}

else 
{
    console.log("wrong pin code ...");
}
``
let operation = await inquirer.prompt(
    [
        {
            name: "operation" ,
            message: "please select operation",
            type: "list",
            choices: [
                "deposit",
                "withdraw",
                "balance",
                "exit"
            ]
        }
    ]
)

if (operation.operation === "deposit") {
    let amount = await inquirer.prompt(
        [
            {
                name: "amount" ,
                message: "enter amount for deposit",
                type: "number",
            }
        ]
    );
    myBalance += amount.amount;
    console.log(`your balance is ${myBalance}`);
}

else if (operation.operation === "withdraw") {
    let amount = await inquirer.prompt(
        [
            {
                name: "amount" ,
                message: "select amount for withdraw",
                type: "list",
                choices: [
                    "1000",
                    "5000",
                    "10000",
                    "15000",
                    "20000",
                    "25000",
                    "30000",
                    "40000",
                    "50000"
                ]
            }
        ]
    );
    if (myBalance < amount.amount) {
        console.log("insufficient balance ...");
    }
    else{
        if (amount.amount === 1000) {
            myBalance -= 1000;
            console.log(`your balance is ${myBalance}`);
        }
        else if (amount.amount === 5000) {
            myBalance -= 5000;
            console.log(`your balance is ${myBalance}`);
        }
        else if (amount.amount === 10000) {
            myBalance -= 10000;
            console.log(`your balance is ${myBalance}`);
        }
        else if (amount.amount === 15000) {
            myBalance -= 15000;
            console.log(`your balance is ${myBalance}`);
        }
        else if (amount.amount === 20000) {
            myBalance -= 20000;
            console.log(`your balance is ${myBalance}`);
        }
        else if (amount.amount === 25000) {
            myBalance -= 25000;
            console.log(`your balance is ${myBalance}`);
        }
        else if (amount.amount === 30000) {
            myBalance -= 30000;
            console.log(`your balance is ${myBalance}`);
        }
        else if (amount.amount === 40000) {
            myBalance -= 40000;
            console.log(`your balance is ${myBalance}`);
        }
        else (amount.amount === 50000); {
            myBalance -= 50000;
            console.log(`your balance is ${myBalance}`);
        }
}

}

else if (operation.operation === "balance") {
    console.log(`your balance is ${myBalance} `);
}

else (operation.operation === "exit");{
    console.log("good bye ...");
}