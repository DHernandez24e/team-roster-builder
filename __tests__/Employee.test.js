const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('create an Employee object', () => {
    const employee = new Employee();

    //name
    expect(employee.name).toEqual(expect.any(String));
    //id
    expect(employee.id).toEqual(expect.any(Number));
    //email
    expect(employee.email).toEqual(expect.any(String));
    
    //getId()
    //getEmail()
    //getRole 'Returns Employee'
});

test('Gets name from employee item', () => {
    const employee = new Employee();
    //getName()
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

// test('Gets employee ID number', () => {
//     const employee = new Employee();
// })