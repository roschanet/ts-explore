interface Person {
    name: string;
    age: number;
    address?: string // address can be avoid as optional property with ? mark
    greet?(): string // method can also be optional
}

class InterfaceOptional implements Person {
    user: Person
    constructor(public name: string, public age: number, public address?: string){
        this.user = {name, age, address}
    }

    printUser(){
        console.log(this.user);
    }
}

export default InterfaceOptional