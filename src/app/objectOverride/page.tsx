import OverrideDepartment from "@/objects/overrideDepartment"

export default function ObjectOverride(){
    const machine = new OverrideDepartment('Machine', ['Coaching'])

    machine.description()

    machine.addEmploye('max')
    machine.addEmploye('susan')

    machine.printEmployeesInfo()

    return (
        <>
        <h1>Object Override Page</h1>
        </>
    )
}