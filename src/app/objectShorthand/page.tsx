import ShorthandDepartment from "@/objects/shorthandDepartment"

export default function ObjectShorthand(){
    const computer = new ShorthandDepartment('Computer Science')

    console.log(computer)
    computer.addEmployee('Rina')
    computer.addEmployee('Tina')
    computer.addEmployee('Karina')

    computer.printEmployees()

    return (
        <>
        <h1>Object Shorthand Page</h1>
        </>
    )
}