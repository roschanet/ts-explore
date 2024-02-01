import StaticDepartment from "@/objects/staticDepartment"

export default function ObjectStaticPage(){

    StaticDepartment.createFinance('Finance of March')

    StaticDepartment.printFinance()
    

    return (
        <>
        <h1>Object Static Page</h1>
        </>
    )
}