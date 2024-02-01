import Department from "./department";

class GetterSetterDepartment extends Department{
    private lastReport: string
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error("No report found");
    }

    set mostRecentReport(value){
        if(!value){
            throw new Error("Please pass value to preceed");
            
        }
        this.addReport(value)
    }

    constructor(name: string, private reports: string[]){
        super(name)
        this.lastReport = reports[0]
    }

    addReport(report: string){
        this.reports.push(report)
        this.lastReport = report
    }

    printReports(){
        console.log('Reports: ', this.reports);
        
    }
}

export default GetterSetterDepartment