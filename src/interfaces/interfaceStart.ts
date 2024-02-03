// Interface is used for make the structure of an object but can not have initial value and implementation

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void
}

let user1: Person

user1 = {
    name: 'Rully',
    age: 36,
    greet(phrase: string){
        console.log(phrase + this.name);
        
    }
}

export default user1