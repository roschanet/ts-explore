import Person from "@/decorators/decoratorMultiple"

export default function DecoratorMultiplePage(){
    const user = new Person()
    
    return (
        <>
        <h1>Decorator Multiple Page</h1>
        </>
    )
}