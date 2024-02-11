import Person from "@/decorators/decoratorFirst"

export default function DecoratorFirstPage(){
    const sales = new Person()

    return (
        <>
        <h1>Decorator First Page</h1>
        </>
    )
}