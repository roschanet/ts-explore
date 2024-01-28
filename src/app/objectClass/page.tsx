import Department from "@/objects/department"

export default function ObjectClass(){
    const department = new Department('Accounting');
    department.description()

    // const accountingCopy = {name: 'Marketing', description: department.description}

    // accountingCopy.description()

    department.printEmployeesInfo()
    department.addEmploye('Susan')
    department.addEmploye('Mark')
    department.addEmploye('Lidya')
    department.printEmployeesInfo()

    return (
        <>
        <h1>Object Class Page</h1>
        <p>{`Department name: ${department.name}`}</p>
        </>
    )
}