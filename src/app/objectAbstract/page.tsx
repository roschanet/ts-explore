import { InheritAbstract } from "@/objects/abstractDepartment"

export default function ObjectAbstract(){
    const physic = new InheritAbstract([])

    physic.createTask('Make model 1')

    physic.printTasks()

    return (
        <>
        <h1>Object Abstract Page</h1>
        </>
    )
}