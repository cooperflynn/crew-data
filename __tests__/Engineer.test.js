const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', '203', 'bob@gmail.com', 'Engineer', 'github.com/bob');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('203');
    expect(engineer.email).toBe('bob@gmail.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('github.com/bob')
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Bob', '203', 'bob@gmail.com', 'Engineer', 'github.com/bob');

    expect(engineer.getName()).toEqual('Bob');
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Bob', '203', 'bob@gmail.com', 'Engineer', 'github.com/bob');

    expect(engineer.getID()).toEqual('203');
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Bob', '203', 'bob@gmail.com', 'Engineer', 'github.com/bob');

    expect(engineer.getEmail()).toEqual('bob@gmail.com');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Bob', '203', 'bob@gmail.com', 'Engineer', 'github.com/bob');

    expect(engineer.getRole()).toEqual('Engineer');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Bob', '203', 'bob@gmail.com', 'Engineer', 'github.com/bob');

    expect(engineer.getGithub()).toEqual('github.com/bob');
});


