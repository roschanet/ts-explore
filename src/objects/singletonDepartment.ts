import Department from "./department";

class SingletonDepartment extends Department {
    private static reports: string[] = []
    private static instance: SingletonDepartment

    private constructor(){ // Make singleton with private modifier
        super('English')
    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }
        return this.instance = new SingletonDepartment()
    }

    static addReport(report: string){
        this.reports.push(report)
    }

    static printReport(){
        console.log(this.reports);
    }


}

export default SingletonDepartment