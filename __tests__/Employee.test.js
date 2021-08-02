const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee parent object', () => {
    const employee = new Employee('Bob', '203', 'bob@gmail.com', 'Engineer');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('203');
    expect(employee.email).toBe('bob@gmail.com');
    expect(employee.role).toBe('Engineer');
});

test("gets employee's name", () => {
    const employee = new Employee('Bob', '203', 'bob@gmail.com', 'Engineer');

    expect(employee.getName()).toEqual('Bob');
});

test("gets employee's id", () => {
    const employee = new Employee('Bob', '203', 'bob@gmail.com', 'Engineer');

    expect(employee.getID()).toEqual('203');
});

test("gets employee's email", () => {
    const employee = new Employee('Bob', '203', 'bob@gmail.com', 'Engineer');

    expect(employee.getEmail()).toEqual('bob@gmail.com');
});

test("gets employee's role", () => {
    const employee = new Employee('Bob', '203', 'bob@gmail.com', 'Engineer');

    expect(employee.getRole()).toEqual('Engineer');
});

