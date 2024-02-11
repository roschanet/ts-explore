import Person from "@/decorators/decoratorFactory"

export default function DecoratorFactoryPage(){
    const user = new Person()
    
    return (
        <>
        <h1>Decorator Factory Page</h1>
        </>
    )
}
