import Department from "./department";

class OverrideDepartment extends Department {
    protected tasks: string[] = []

    constructor(name:string, tasks: string[]){
        super(name)
        this.tasks = tasks
    }

    addEmploye(employee: string): void {
        if(employee === 'susan'){
            return
        }
        this.employees.push(employee)
    }


}

export default OverrideDepartment