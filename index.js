const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = require('./src/page-template');

const employeeArr = [];
let count = 0;

const launchApp = () => {
    if (count === 0) {
        count++;
        console.log('Welcome to the Team Profile Generator!');

        initialPrompt();
    } else {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmContinue',
                message: 'Would you like to add another member to this team?',
                default: true
            }
        ])
        .then(answer => {
            if(answer.confirmContinue === true) {
                console.log("Please enter the next team member's data")
                initialPrompt();
            } else {
                return writeHTML();
            }
        })
    }
};

const initialPrompt = () => {
   return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team member's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter the team member's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team member's employee ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("You must enter the team member's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team member's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter the team member's email address!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please choose's the team member's role.",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then(answers => {
        if (answers.role === 'Manager') {
            console.log('Please answer the following questions about this Manager:')
            managerPrompt(answers);
        } else if (answers.role === 'Engineer') {
            console.log('Please answer the following questions about this Engineer:')
            engineerPrompt(answers);
        } else if (answers.role === 'Intern') {
            console.log('Please answer the following questions about this Engineer:')
            internPrompt(answers);
        }
    })
}

const managerPrompt = (data) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office number.",
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("You must enter the manager's office number!")
                        return false;
                    }
                }
            }
        ])
        .then((answer) => {
            const { name, id, email, role } = data;
            const { officeNumber } = answer;
            const manager = new Manager(name, id, email, role, officeNumber);
            employeeArr.push(manager);
        })
        .then( () => {
            launchApp();
        });
};

const engineerPrompt = (data) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: "Please enter the engineer's github username.",
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("You must enter the engineer's github username!")
                        return false;
                    }
                }
            }
        ])
        .then((answer) => {
            const { name, id, email, role } = data;
            const { github } = answer;
            const engineer = new Engineer(name, id, email, role, github);
            employeeArr.push(engineer);
        })
        .then( () => {
            launchApp();
        });
};

const internPrompt = (data) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school.",
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("You must enter the intern's school!")
                        return false;
                    }
                }
            }
        ])
        .then((answer) => {
            const { name, id, email, role } = data;
            const { school } = answer;
            const intern = new Intern(name, id, email, role, school);
            employeeArr.push(intern);
        })
        .then( () => {
            launchApp();
        });
};

const writeHTML = () => {
    const pageHTML = generateHTML(employeeArr);

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw new Error(err);
        console.log('Your team page has been created in the dist folder!');
    });

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) throw new Error(err);
        console.log('Style sheet copied to dist folder');
    })
};

launchApp()
