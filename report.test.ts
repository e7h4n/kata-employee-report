import { toIncludeSameMembers } from 'jest-extended';
expect.extend({ toIncludeSameMembers });

import { Employee, filterEmployee } from './report';

const employees: Employee[] = [
    { name: 'Max', age: 17 },
    { name: 'Sepp', age: 18 },
    { name: 'Nina', age: 15 },
    { name: 'Mike', age: 51 },
];

it('should return employees which older than 18', () => {
    const result = filterEmployee(employees);

    result.forEach(e => {
        expect(e.age).toBeGreaterThanOrEqual(18);
    });
});

it('should return employees which sorted by their names', () => {
    const result = filterEmployee(employees);

    for (let i = 0; i < result.length - 1; i++) {
        expect(result[i + 1].name <= result[i].name).toBeTruthy();
    }
});

it('should return employees which name is capitalized', () => {
    const result = filterEmployee(employees);

    const expected = expect.stringMatching(/^[A-Z]+$/);

    result.forEach(e => {
        expect(e.name).toEqual(expected);
    });
});
