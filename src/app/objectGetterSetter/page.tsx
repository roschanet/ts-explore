import GetterSetterDepartment from "@/objects/getterSetterDepartment"

export default function ObjectGetterSetter(){
    const chemical = new GetterSetterDepartment('Chemical', [])

    chemical.description()
    chemical.printEmployeesInfo()
    chemical.mostRecentReport = 'Hello from setter value report'
    console.log(chemical.mostRecentReport) // Invoke getter as property
    chemical.addReport('Something went wrong...')
    chemical.addReport('Still something went wrong...')
    chemical.printReports()

    return (
        <>
        <h1>Getter Setter Page</h1>
        </>
    )
}