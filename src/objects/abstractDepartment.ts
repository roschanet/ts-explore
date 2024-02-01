import Department from "./department";

abstract class AbstractDepartment extends Department {
    // Abstract class will Force child class to using tasks and createTask
    abstract tasks: string[] // No need initial value

    abstract createTask(this: AbstractDepartment, task: string): void

    constructor(){
        super('Sports')
    }
}

export class InheritAbstract extends AbstractDepartment {
    
    constructor(public tasks: string[]){
        super()
    }

    createTask(this: AbstractDepartment, task: string): void {
        this.tasks.push(task)
    }

    printTasks(){
        console.log(this.tasks);
        
    }
}