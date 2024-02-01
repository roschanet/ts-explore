class Department {
    name: string
    // private employees: string[] = []
    protected employees: string[] = []

    constructor(n: string){
        this.name = n
    }

    description(this: Department){ // this is a must for this class scope
        console.log('The Department:', this.name);
    }

    addEmploye(employee: string){
        this.employees.push(employee)
    }

    printEmployeesInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
        
    }
}

export default Department