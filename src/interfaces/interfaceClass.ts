// Interface only as a mockup without initialization values and method's body
interface Named {
    name: string;
}

export interface Greetable extends Named { // interface can also be extends
    readonly phrase: string;
    greet(): void
}

// Interface in class can force it to have interface's properties and method
class Person implements Greetable { // Class can be implements more than one interface {Greetable, Named}
    name: string;
    phrase: string;
    age: number
    greet(): void {
        console.log(this.phrase + this.name);
        
    }

    constructor(n: string, p: string){
        this.name = n
        this.age = 30
        this.phrase = p
    }
}

export default Person