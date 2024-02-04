type Admin = {
    name: string;
    privileges: string[]
}

// interface version
// interface Admin {
//     name: string;
//     privileges: string[]
// }

type Employee = {
    name: string;
    startDate: Date
}
// interface version
// interface Employee {
//     name: string;
//     startDate: Date
// }

type ElevatedEmployee = Admin & Employee // in case object type,  type of ElevatedEmployee will be type combination of Admin and Employee properties have
// interface version
// interface ElevatedEmployee extends Admin, Employee {}

// Union type
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric // in case of union type, type of Universal will be number (as intersection)

class IntersectionTypes {
    e1: ElevatedEmployee = {
        name: 'Welly',
        privileges: ['create-server'],
        startDate: new Date()
    }

    // x: Universal = 'hallo' // will be error caused Universal have type number as intersection
    x: Universal = 4 // the correct one
}

export default IntersectionTypes