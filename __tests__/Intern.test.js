const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Bob', '203', 'bob@gmail.com', 'Intern', 'University of Texas');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe('203');
    expect(intern.email).toBe('bob@gmail.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toEqual('University of Texas');
});

test("gets intern's name", () => {
    const intern = new Intern('Bob', '203', 'bob@gmail.com', 'Intern', 'University of Texas');

    expect(intern.getName()).toEqual('Bob');
});

test("gets intern's id", () => {
    const intern = new Intern('Bob', '203', 'bob@gmail.com', 'Intern', 'University of Texas');

    expect(intern.getID()).toEqual('203');
});

test("gets intern's email", () => {
    const intern = new Intern('Bob', '203', 'bob@gmail.com', 'Intern', 'University of Texas');

    expect(intern.getEmail()).toEqual('bob@gmail.com');
});

test("gets intern's role", () => {
    const intern = new Intern('Bob', '203', 'bob@gmail.com', 'Intern', 'University of Texas');

    expect(intern.getRole()).toEqual('Intern');
});

test("gets intern's school", () => {
    const intern = new Intern('Bob', '203', 'bob@gmail.com', 'Intern', 'University of Texas');

    expect(intern.getSchool()).toEqual('University of Texas');
});