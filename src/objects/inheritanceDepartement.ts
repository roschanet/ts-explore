import Department from "./department";

class InheritanceDepartment extends Department {
    admins: string[]
    constructor(name: string, admins: string[]){
        super(name)
        this.admins = admins
    }
}

export default InheritanceDepartment