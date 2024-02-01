import InheritanceDepartment from "@/objects/inheritanceDepartement"

export default function ObjectInheritance(){
    const electrical = new InheritanceDepartment('Electrical', ['Susan', 'Romeo'])

    electrical.description()

    electrical.addEmploye('Maxon')
    electrical.addEmploye('Laurentz')
    electrical.addEmploye('Susan')
    electrical.addEmploye('Teguh')
    electrical.addEmploye('Romeo')

    electrical.printEmployeesInfo()
    const admins =electrical.admins

    return (
        <>
        <h1>Object Inheritance Page</h1>
        <ol>
            {admins.map((admin, idx)=> <li key={`${admin}-${idx}`}>{admin}</li>)}
        </ol>
        </>
    )
}