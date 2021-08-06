const generateRoleIcon = role => {

    if (role === 'Manager') {
        const roleIcon = `<i class="fas fa-user-tie"></i>`;
        return roleIcon;
    } else if (role === 'Engineer') {
        const roleIcon = `<i class="far fa-keyboard"></i>`;
        return roleIcon;
    } else {
        const roleIcon = `<i class="fas fa-mug-hot"></i>`;
        return roleIcon;
    }
};

const uniqueFeatures = employee => {
    if (employee.getRole() === 'Manager') {
        return `Office Number: ${employee.getOfficeNumber()}`;
    } else if (employee.getRole() === 'Engineer') {
        return `Github: ${employee.getGithub()}`;
    } else {
        return `School: ${employee.getSchool()}`;
    };
};

const generateCard = employee => {
    let html = '';
    for (let i = 0; i< employee.length; i++) {

        html += `
            <div class="card my-3 mx-2" style="width: 18rem;">
                <div class="card-header bg-primary text-light">
                    <h4 class="font-weight-bold">${employee[i].getName()}</h4>
                    <h4 class="font-weight-bold">${generateRoleIcon(employee[i].getRole())} ${employee[i].getRole()}</h4>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee[i].getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                        <li class="list-group-item">${uniqueFeatures(employee[i])}</li>
                    </ul>
            </div>  
        `
    }
    return html;
};

const generateHTML = (employeeArr) => {
    if (!employeeArr) {
        return '';
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto+Mono:wght@100&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <nav class="text-center bg-dark text-light py-3 mb-5">
            <h1>My Team</h1>
        </nav>

        <main class="container d-flex flex-wrap justify-content-center">
            ${generateCard(employeeArr)}
        </main>
        
    </body>
    </html>
    `
};

module.exports = generateHTML;