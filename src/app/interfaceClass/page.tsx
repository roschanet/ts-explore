import Person, { Greetable } from "@/interfaces/interfaceClass"

export default function InterfaceClass(){
    const sales = new Person('Bejo','Good day! ')
    sales.greet()
    sales.phrase = 'Welcome '
    sales.phrase = 'Hi dude! '
    sales.greet()

    let affiliators: Greetable
    affiliators = new Person('Susan','Awesome!! ')

    // console.log('Affiliator', affiliators);
    affiliators.greet()
    // affiliators.phrase = 'The phrase is ' // By using interface as type makes readonly can not changed
    
    return (
        <>
            <h1>Interface Class Page</h1>
        </>
    )
}