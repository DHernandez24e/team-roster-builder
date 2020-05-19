const inquirer = require('inquirer');
const memberData = [];

const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a number value');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number',
            validate: offNumInp => {
                if (offNumInp) {
                    return true
                } else {
                    console.log('Please enter an office number');
                    return false
                }
            }
        }
];

const memberChoose = () => {
    return inquirer.prompt(
        [
            {
                type: 'list',
                name: 'addMember',
                message: 'Please choose what type of employee you would like to add',
                choices: ['Engineer', 'Intern']
            }
        ])
    .then(answer => {
        if (answer.addMember === 'Engineer') {
            engineerQuestions()
        } else {
            internQuestions()
        }
    })
}

const engineerQuestions = () => {

    const engineerData = [];

    return inquirer.prompt([
    {
        type: 'input',
        name: 'engName',
        message: "What is your engineer's name?"
    },
    {
        type: 'input',
        name: 'engId',
        message: 'What is their employee ID number?'
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'What is their email address?'
    },
    {
        type: 'input',
        name: 'engGithub',
        message: 'What is their Github username?'
    },
    {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another team member?',
        default: true
    }
])
.then(answers => {
    if (answers.addAnother === true) {
        answers.push(engineerData);
        memberChoose()
    } else {
        return answers
    }

})}

const internQuestions = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'intName',
                message: "What is your intern's name?"
            },
            {
                type: 'input',
                name: 'intId',
                message: 'What is their employee ID number?'
            },
            {
                type: 'input',
                name: 'intEmail',
                message: 'What is their email address?'
            },
            {
                type: 'input',
                name: 'intSchool',
                message: 'What school are they attending?'
            },
            {
                type: 'confirm',
                name: 'addAnother',
                message: 'Would you like to add another team member?',
                default: true
            }
        ])
    .then(answers => {
        if (answers.addAnother === true) {
            memberChoose()
        } else {
            return answers;
        }
    })
}

const promptUser = () => {
    return inquirer.prompt(managerQuestions)
    .then(managerData => {
        console.log(managerData);
        memberChoose();
})}

module.exports = promptUser;