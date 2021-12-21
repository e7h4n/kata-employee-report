import { sortBy } from 'lodash';

export interface Employee {
    readonly name: string;
    readonly age: number;
};


export function filterEmployee(employees: Employee[]) {
    let result = employees.filter(e => e.age >= 18);

    result = sortBy(result, e => e.name).reverse().map(e => {
        return {
            name: e.name.toUpperCase(),
            age: e.age,
        };
    });

    return result;
}
