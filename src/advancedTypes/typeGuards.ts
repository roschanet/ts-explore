type Admin = {
    name:string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date
}

type Combinable = string | number

type ElevatedEmployee = Admin & Employee

type UnknownEmployee = Admin | Employee // Also union type

// For class we can use in or instanceof keywords as type guards
class TypeGuards {
    printEmployeeInfo(emp: UnknownEmployee){
        if('privileges' in emp){ // union type guard with using in keyword
            console.log('Privileges', emp.privileges);
        }
        if('startDate' in emp){ // union type guard with using in keyword
            console.log('Start Date', emp.startDate);
        }
        
    }

    add(x: Combinable, y: Combinable){
        if(typeof x === 'string' || typeof y === 'string'){ // For union type, using typeof for type guard

            return x.toString() + y.toString()
        }
        return x + y
    }
}

export default TypeGuards