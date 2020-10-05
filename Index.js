const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer =  require('./lib/Engineer');
const inquirer = require('inquirer');
const makePage =  require('./src/page-template');
const writeHTML = require('./src/write-doc');
//initialize empty array because once populated it will be the data to make the html
const teamArray = [];

//this function will determine if they want to continue adding team members or if they want to print the html doc. 
const nextPerson = function(){
    inquirer
        .prompt([{
            type: "list",
            name: "choose",
            message: "Would you like to add an intern or engineer?",
            choices: ["Engineer","Intern","I am done"]
        }])
        .then(({choose}) => {
            if(choose === 'Engineer'){
                newEngineer()
            } else if(choose === 'Intern') {
                newIntern()
            } else {
                makePage(teamArray);
                console.log("Page has been made in the ./dist folder labeled index.html!")
            }  
        })
}
// This is the manager function that will start the whole thing!
const newManager = function(){
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is the name of your manager?',
        },
        {
            type: 'text',
            name: 'email',
            message: "What is your manager's email?"
        },
        {
            type: 'text',
            name: "id",
            message: "What is your manager's ID number? (Please provide a number value)"
        },
        {
            type: 'text',
            name:'office',
            message: "What is office number of your manager?"
        }])
        .then(({name,email,id,office})=>{
            const newManager = new Manager(name,email,id,office);
            teamArray.push(newManager);
            nextPerson();
        })
}
const newIntern = function() {
    inquirer
        .prompt ([{
            type: "text",
            name: "name",
            message: "What is your interns name?"
        },
        {
            type: "text",
            name: "email",
            message: "What is your Intern's email?"
        },
        {
            type: 'text',
            name: "id",
            message: "What is the Employee ID number for this Intern?"
        },
        {
            type:"text",
            name:"school",
            message:"What school does your Intern attend?"
        },
    ])
    .then(({name,email,id,school})=>{
        const newIntern = new Intern(name,email,id,school);
        teamArray.push(newIntern);
        nextPerson();
    })
}
const newEngineer = function(){
    inquirer
        .prompt ([{
            type: "text",
            name: "name",
            message: "What is your Engineer's name?"
        },
        {
            type: "text",
            name: "email",
            message:"What is your Engineer's email?"
        },
        {
            type: "text",
            name: "id",
            message: "What is your Engineer's employee ID number?"
        },
        {
            type: "text",
            name: "github",
            message: "Please provide your Engineer's github username?"
        }
    ])
    .then(({name,email,id,github})=>{
        const newEngineer = new Engineer(name,email,id,github);
        teamArray.push(newEngineer);
        nextPerson();
    })
}
//calling this function to get things going
newManager();