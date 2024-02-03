import SingletonDepartment from "@/objects/singletonDepartment"

export default function ObjectSingleton(){
    // With private, class can not be instantiated
    // const english = new SingletonDepartment()
    const english = SingletonDepartment.getInstance()

    // const language = new SingletonDepartment()
    const language = SingletonDepartment.getInstance()

    // With singleton the instance only can be one, with the same properties and methods
    english.description()
    SingletonDepartment.addReport('Report 1')
    SingletonDepartment.printReport()

    language.description()
    SingletonDepartment.addReport('Report 2')
    SingletonDepartment.printReport()

    return (
        <>
        <h1>Object Singleton Page</h1>
        </>
    )
}