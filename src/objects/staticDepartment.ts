import Department from "./department";

class StaticDepartment extends Department {
    static finances: string[] =[] // Static property also
    static yearFiscal: string // Static property

    constructor(){
        super('Pharmaceutical')
        StaticDepartment.yearFiscal // The way to access static property
    }

    static createFinance(finance: string){
        this.finances.push(finance) // finances property must also static
    }

    static printFinance(){
        console.log(this.finances.length);
        console.log(this.finances);
        
    }
}

export default StaticDepartment