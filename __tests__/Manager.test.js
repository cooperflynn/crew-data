const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Bob', '203', 'bob@gmail.com', 'Manager', '13');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe('203');
    expect(manager.email).toBe('bob@gmail.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual('13');
});

test("gets manager's name", () => {
    const manager = new Manager('Bob', '203', 'bob@gmail.com', 'Manager', '13');

    expect(manager.getName()).toEqual('Bob');
});

test("gets manager's id", () => {
    const manager = new Manager('Bob', '203', 'bob@gmail.com', 'Manager', '13');

    expect(manager.getID()).toEqual('203');
});

test("gets manager's email", () => {
    const manager = new Manager('Bob', '203', 'bob@gmail.com', 'Manager', '13');

    expect(manager.getEmail()).toEqual('bob@gmail.com');
});

test("gets manager's role", () => {
    const manager = new Manager('Bob', '203', 'bob@gmail.com', 'Manager', '13');

    expect(manager.getRole()).toEqual('Manager');
});

test("gets manager's office number", () => {
    const manager = new Manager('Bob', '203', 'bob@gmail.com', 'Manager', '13');

    expect(manager.getOfficeNumber()).toEqual('13');
});