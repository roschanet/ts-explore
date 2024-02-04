import TypeGuards from "@/advancedTypes/typeGuards"

export default function AdvancedTypeGuards(){
    const sales = new TypeGuards()

    sales.printEmployeeInfo({name: 'Welly', startDate: new Date()})
    sales.printEmployeeInfo({name: 'Welly', privileges: ['delete-user']})

    const addResult = sales.add(2,5)

    return (
        <>
        <h1>Advanced Type Guards Page</h1>
        {`Add result is: ${addResult}`}
        </>
    )
}