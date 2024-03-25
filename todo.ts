import inquirer from "inquirer";

let todos : string[] = [];
let loop = true;

while (loop) {
    let answer = await inquirer.prompt([
        {
            name : "TODO",
            type : "input",
            message : "Enter your Todo",
        },
        {
            name : "Addmore",
            type : "confirm",
            message : "what do addmore Todo ",
            default : false
        },
    ]);
    const {TODO,Addmore} = answer;
    console.log(answer);
    loop = Addmore;
    if (TODO) {
        todos.push (TODO);
    }else{
        console.log("kindly Add valid input");
    }
}

if (todos.length > 0) {
    console.log("Your Todo List ");
    todos.forEach(TODO => {
        console.log(TODO);
    });
}else{
    console.log("No Todo Found");
}