var fs = require("fs");
require('dotenv').config()
var inquirer = require("inquirer");
var api = require('./utils/api');
var generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type:"input",
        message:"what is your github username",
        name:"usergithub"
    },
    {
        type:"input",
        message:"What is your email address",
        name:"email"
    },
    {
        type:"input",
        message:"What is your Project name",
        name:"title"
    },
    {
        type:"input",
        message:"please write a short description of your project",
        name:"projDes"
    },
    {
        type:"list",
        message: "what license should your project have",
        choices:["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
        name:"license"
    },
    {
        type:"input",
        message:"What command should be run to install dependencies?",
        name:"instDep"
    },
    {
        type:"input",
        message: "What command should be run to run the test",
        name: "runTest"
    },
    {
        type:"input",
        message: "what does the user need to know about using the repo?",
        name:"usingRepo"
    },
    {
        type:"input",
        message: "what does the user need to know about contributing to the repo?",
        name:"usingContribution"
    }
];
function init() {

    inquirer.prompt(questions)
    .then(results=>{
        api.getUser(results.usergithub).then(({data})=>{

          fs.writeFile('read.md', generateMarkdown({...data, ...results}), err => {
            if (err) throw err;
            console.log('Saved!');
          })
        })
       
    })
}

init();
