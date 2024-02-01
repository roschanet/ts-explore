class ShorthandDepartment {
    private employees: string[] =[]
    private isListed: boolean
    constructor(public name: string) // short version of public name: string => this.name = name
    {
        this.isListed = true
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployees(){
        console.log(this.employees);
        
    }
}

export default ShorthandDepartment